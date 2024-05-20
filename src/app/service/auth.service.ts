import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private username: string='';
  private password: string='';

  setCredentials(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  getCredentials(): { username: string, password: string } {
    return { username: this.username, password: this.password };
  }
}
