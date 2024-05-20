import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login() {
    const credentials = { email: this.email, password: this.password };


    this.http.post('http://localhost:8080/DAPP01Practica05-0.0.1-SNAPSHOT/api/v1/login', credentials).subscribe(
      response => {
        console.log('Inicio de sesión exitoso:', response);
        this.authService.setCredentials(this.email, this.password); 
        this.router.navigate(['/empleados']); 
      },
      error => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }
}
