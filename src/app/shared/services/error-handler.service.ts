// import { HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { throwError } from 'rxjs';
// @Injectable({
//   providedIn: 'root'
// })
// export class ErrorHandlerService {

//   constructor() {}

//   public handleError(error: any) {
//     let errorMessage = '';

//     // Verificar si es un error del cliente
//     if (error && error.error && error.error.message) {
//       console.error('Error del cliente o de red:', error.error.message);
//       errorMessage = `Ocurrió un error: ${error.error.message}`;
//     } else if (error instanceof HttpErrorResponse) {
//       // Verificar si es un error del servidor
//       console.error(
//         `Error del servidor - Código: ${error.status}, ` +
//         `Mensaje: ${JSON.stringify(error.error)}`
//       );
//       errorMessage = `Error del servidor: ${error.status}, ` +
//                      `Cuerpo del error: ${JSON.stringify(error.error)}`;
//     } else {
//       // Error desconocido
//       console.error('Error desconocido:', error);
//       errorMessage = 'Ha ocurrido un error inesperado.';
//     }

//     // Retornar un observable con un mensaje amigable
//     return throwError(() => new Error(errorMessage || 'Algo salió mal.'));
//   }
// }
