import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}
  
  canActivate(): boolean {
    if (this.loginService.isLoggedIn) {
      return true;
    } else {
      // Redirect to login page or any other appropriate action
      this.router.navigate(['/login']);
      return false;
    }
  }
}