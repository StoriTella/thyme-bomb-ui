import { Injectable } from '@angular/core';
import { User } from '../model/user';
import * as kafka from 'no-kafka';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  user!: User;
  isLoggedIn: boolean = false;
  maxValueUser: number = 40;
  consumer = new kafka.SimpleConsumer({
    connectionString: 'localhost:9092', // Replace with your Kafka broker connection string
    clientId: 'your-client-id', // Provide a unique client ID
  });

  getUser(): any {
    return this.user;
  }

  setUser(user: User) {
    this.user = user;
  }

  login(username: string): boolean {
    //mock user
    this.user = {
      username: username,
      attackMax: 10,
      attackMin: 5,
      defenseMax: 5,
      defenseMin: 2,
      chanceAttack: 5,
      chanceDefense: 3,
      chanceItem: 5,
      chanceGold: 5,
    }
    this.isLoggedIn = true;
    return true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
