
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse ,HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService  implements HttpInterceptor{

  
   
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 // Excluir la ruta de login
 if (req.url.includes('/auth/login') || req.url.includes('/layout/categoria')) {
  return next.handle(req);
}

    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      // Obtener el token desde el localStorage
      const token = localStorage.getItem('token');
      
      // Si el token existe, clonamos la solicitud y añadimos el token al header
      if (token) {
        const clonedRequest = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        return next.handle(clonedRequest).pipe(
          map((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // Si el backend devuelve un código de negocio (code), puedes manejarlo aquí
              console.log("estoy ingresado");
              const body = event.body;
              console.log("body",body);
              if (body && body.code !== 200) {

                console.log("body",body.code);
                console.error('Backend returned a non-200 code:', body.code);
                throw new HttpErrorResponse({ error: body, status: 403 });
              }
            }
            return event;
          }),
          catchError((error: HttpErrorResponse) => {
            console.error('Error caught in interceptor:', error);
            return throwError(error);
          })
        );;
      }
    }
    
    // Si no hay token o no estamos en el navegador, se envía la solicitud sin modificaciones
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Si el backend devuelve un código de negocio (code), puedes manejarlo aquí
          const body = event.body;
          if (body && body.code !== 200) {
            console.error('Backend returned a non-200 code:', body.code);
            throw new HttpErrorResponse({ error: body, status: 403 });
          }
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error caught in interceptor:', error);
        return throwError(error);
      })
    );

   
  }
}
