import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private router:Router) { }

  canActivate() {
    console.log(sessionStorage.getItem('authenticatedUser'));
    if(sessionStorage.getItem('authenticatedUser')){
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
