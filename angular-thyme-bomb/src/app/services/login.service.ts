import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  user!: User;
  isLoggedIn: boolean = false;

  getUser(): any {
    return this.user;
  }

  login(username: string): boolean {
    //mock user
    this.user = {
      username: username,
      attack_max: 3,
      attack_min: 2,
      defense_max: 3,
      defense_min: 2,
      chance_attack: 5,
      chance_defense: 5,
      chance_item: 2,
      chance_gold: 2,
    }
    this.isLoggedIn = true;
    return true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
