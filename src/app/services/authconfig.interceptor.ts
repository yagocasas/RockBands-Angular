import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthconfigInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> { //intercepta nuestras petic. http y le mete un bearer
    const token = this.authService.getToken();
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer' + token
      }
    })
    return next.handle(request);//es parecido al next de node. Seguir al siguiente paso con la request. Le hemos metido la autorización
  }
}
