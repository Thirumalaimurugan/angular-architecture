import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { log } from 'util';
import { Observable } from 'rxjs';
interface myData{
  data:string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInStatus=localStorage.getItem('status') || false;

  constructor(private http:HttpClient) { }

  isLoggedIn():Observable<boolean>
  {    
    return this.http.post<boolean>('/api/isLoggedIn',{});
  }

  get localStorageStatus(){
    return this.loggedInStatus;
  }

  setLoggedIn(value:boolean)
  {
    this.loggedInStatus=value;
    if(!value)
    {
      localStorage.removeItem('status');
    }
  }

  getUserDetails(username,password)
  {
    return this.http.post<myData>('/api/login',{username:username,password:password});

  }
  getAdmin()
  {
    return this.http.post('/api/getAdmin',{});
  }

  logout():Observable<boolean> {
    return this.http.post<boolean>('/api/logout',{});
  }
}
