import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth:AuthService,
              private router:Router) { }

  ngOnInit() {
  }
  loginUser(event)
  {
    event.preventDefault();
    const target=event.target;
    const username=target.querySelector('#username').value;
    const password=target.querySelector('#password').value;
    this.Auth.getUserDetails(username,password).subscribe(data=>{
      console.log('data',data.data);
      if(data.data=='success')
      {
        console.log('working');
        localStorage.setItem('status', 'true' );
        this.router.navigate(['/admin']);
        this.Auth.setLoggedIn(true);
      }
      else
      {
        localStorage.removeItem('status');
        this.Auth.setLoggedIn(false);
        alert('failed');
      }
    });
    console.log(username,password);
  }
}
