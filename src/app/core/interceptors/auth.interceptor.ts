import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Agregar un token de autenticación si está disponible
    const token = localStorage.getItem('token');

    let modifiedReq = req;

    if (token) {
      modifiedReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    // Pasar la solicitud modificada al siguiente manejador
    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejo global de errores
        if (error.status === 401) {
          // Redirigir al usuario a la página de inicio de sesión
          this.router.navigate(['/login']);
        } else if (error.status === 403) {
          // Mostrar un mensaje de acceso denegado
          console.error('Acceso denegado');
        } else {
          console.error('Ocurrió un error desconocido:', error.message);
        }
        return throwError(() => new Error(error.message));
      })
    );
  }
};
