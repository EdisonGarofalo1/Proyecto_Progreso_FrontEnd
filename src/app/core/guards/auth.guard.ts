import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../../features/auth/services/auth.service';



@Injectable({
    providedIn: 'root'
  })
  export class ValidateTokenGuard  implements CanActivate, CanLoad {

    constructor(private _AuthService:AuthService, private router:Router ){
    }
    canActivate(): Observable<boolean> | boolean {
        return this._AuthService.validarToken()
                .pipe(
                  tap( valid => {
                    if ( !valid ) {
                      this.router.navigateByUrl('/auth/login');
                    }
                  })
                );
      }  
      
      canLoad(): Observable<boolean> | boolean {
        return this._AuthService.validarToken()
          .pipe(
            tap( valid => {
              if ( !valid ) {
                this.router.navigateByUrl('/auth/login');
              }
            })
          );
      }

  }