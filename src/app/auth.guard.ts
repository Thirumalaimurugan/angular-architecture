import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthService,
  private router: Router)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.auth.localStorageStatus) {
      
      return true;
    }
    else
    {
      console.log()
      return this.auth.isLoggedIn().pipe(map (data => {
          if(!data) {
            this.router.navigate(['login']);
          }
          return data;
      }));
      
    }
  }
}
