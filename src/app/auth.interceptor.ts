/*import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private username = 'ejemplo@gmail.com';
  private password = 'ejemplo';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authHeader = 'Basic ' + btoa(`${this.username}:${this.password}`);
    const authRequest = request.clone({ setHeaders: { Authorization: authHeader } });
    return next.handle(authRequest);
  }
}*/

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../app/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials = this.authService.getCredentials();
    if (credentials.username && credentials.password) {
      const authHeader = 'Basic ' + btoa(`${credentials.username}:${credentials.password}`);
      const authRequest = request.clone({ setHeaders: { Authorization: authHeader } });
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
