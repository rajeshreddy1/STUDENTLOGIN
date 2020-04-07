import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  isValid = false;
  errorMessage = 'Invalid Credentials';
  constructor(private router: Router,
    private authenticate: LoginService) { }

  ngOnInit(): void {
  }

  ValidateUser() {
    this.authenticate.authenticateUser(this.username, this.password).subscribe(
      response => {
        console.log(response.message);
        if(response.message.length === 0) {
          this.isValid = true;
        }else{
          sessionStorage.setItem('authenticatedUser', this.username);
          this.router.navigate(['welcome', this.username]);
          this.isValid = false;
        }
      }
    )
    
  }
}

