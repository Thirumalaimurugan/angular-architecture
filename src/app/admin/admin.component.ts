import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private Auth:AuthService,
  private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.Auth.logout().subscribe(data => {
      if(data)
      {        
        this.Auth.setLoggedIn(false);
        this.router.navigate(['login']);
      }      
    },
  error => {
    alert('error while accession logout');
  })
  }

}
