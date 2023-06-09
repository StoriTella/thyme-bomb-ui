import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private userService: LoginService, private router: Router) {}
  
  logout() {
    this.userService.logout();
    this.router.navigateByUrl('/');
  }

}
