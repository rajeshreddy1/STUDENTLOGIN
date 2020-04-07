import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) { }

  authenticateUser(username, password) {
    let tempUrl = 'http://localhost:8080/user/validate/'+username+'\/'+password;
    return this.http.get<AuthorizationBean>(tempUrl);
  }

  isUserLoggedIn(){
    if(sessionStorage.getItem('authenticatedUser') != null){
      return true;
    }
    return false;
  }
}

export class AuthorizationBean {
  constructor(public message: string){}
}
