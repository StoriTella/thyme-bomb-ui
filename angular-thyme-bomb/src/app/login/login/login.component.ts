import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';

  constructor(private userService: LoginService, private router: Router) {}

  login() {
    
    if (this.userService.login(this.username)) {
      this.router.navigateByUrl('/homepage');
    } else {
      // Invalid user, show error or take appropriate action
    }
  }

}
