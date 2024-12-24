
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of,map } from 'rxjs';
// import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { GenericResponse} from '../../../shared/model/generic-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private tokenKey = 'token';
  private refreshTokenKey='refreshToken';
  constructor(private http:HttpClient , 
    // private errorHandler: ErrorHandlerService,
    @Inject(PLATFORM_ID) private platformId: Object) { }


    getUser(): Observable<any[]> {
      return this.http.post<GenericResponse<any>>(`${this.baseUrl}auth/list`, {})
        .pipe(
          map((response: GenericResponse<any>) => response.data as any[]),
          // catchError(this.errorHandler.handleError)
        );
    }
    
    
  Login(username:string,password:string){
    const requestData = { username: username ,
      password:password
    }; 
    return this.http.post<GenericResponse<any>>(this.baseUrl + 'auth/login', requestData).pipe(
   
          // catchError(this.errorHandler.handleError)
          );
  }
  saveSession(res: any): void {
    localStorage.setItem(this.tokenKey, res.data.jwt);


    localStorage.setItem(this.refreshTokenKey, res.data.refreshToken);
  }

//   validarToken(): Observable<boolean> {
//     if ( !localStorage.getItem('token') ) {
//       return of(false);
//     }else{
//       return of(true);

//     }
// }

// validarToken(): Observable<boolean> {
//   // Verificar si el código está corriendo en el navegador
//   if (typeof window !== 'undefined' && window.localStorage) {
//     const token = localStorage.getItem('token');
//     // Aquí puedes hacer una verificación más robusta, como validar el token con la API
//     return of(token != null); // Retornamos un Observable<boolean>
//   } else {
//     console.warn('localStorage no está disponible');
//     return of(false); // Retornar un Observable<boolean> con false si no está disponible
//   }
// }
// validarToken(): Observable<boolean> {
//   const token = localStorage.getItem('token');
//   return of(token != null);
// }




validarToken(): Observable<boolean> {
  // Verificar si estamos en el navegador
  if (isPlatformBrowser(this.platformId)) {
    const token = localStorage.getItem('token');
    return of(token != null);
  } else {
    console.warn('localStorage no está disponible (entorno no navegador)');
    return of(false); // Retornar false si no está en un navegador
  }
}
}
