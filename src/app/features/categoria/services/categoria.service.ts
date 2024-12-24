
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { environment } from '../../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of,map,throwError } from 'rxjs';
// import { ErrorHandlerService } from '../../../shared/services/error-handler.service';
import { GenericResponse} from '../../../shared/model/generic-response';
import { Categoria } from '../../../core/models/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private baseUrl: string = environment.baseUrl;
  private resourceUrl = `${this.baseUrl}category`;

  constructor(
    private http: HttpClient,
    // private errorHandler: ErrorHandlerService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /**
   * Obtiene la lista de categorías.
   */
  getAll(): Observable<Categoria[]> {
    return this.http
      .post<GenericResponse<Categoria[]>>(`${this.resourceUrl}/list`, {})
      .pipe(
        map((response:GenericResponse<Categoria[]>) => response.data),
      catchError((error) => {
        console.error('Error in getAll:', error);
        // Puedes decidir si lanzas un error personalizado o manejas uno por defecto
        return throwError(() => new Error('Error fetching categories'));
      })
        // catchError(this.errorHandler.handleError)
        // catchError((error) => this.errorHandler.handleError(error))
      );
  }



  /**
   * Obtiene una categoría por su ID.
   * @param id Identificador de la categoría.
   */
  getById(id: number): Observable<Categoria> {
    const body = { idCategoria: id };
    return this.http.post<GenericResponse<Categoria>>(`${this.resourceUrl}/getById`, body)
      .pipe(
        map((response) => response.data)
        // catchError(this.errorHandler.handleError)
      );
  }

  /**
   * Crea una nueva categoría.
   * @param categoria Datos de la nueva categoría.
   */
  create(categoria: Categoria): Observable<Categoria> {
    return this.http.post<GenericResponse<Categoria>>(`${this.resourceUrl}/save`, categoria)
      .pipe(
        map((response) => response.data)
        // catchError(this.errorHandler.handleError)
      );
  }

  /**
   * Actualiza una categoría existente.
   * @param categoria Datos de la categoría actualizada.
   */
  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<GenericResponse<Categoria>>(`${this.resourceUrl}/update`, categoria)
      .pipe(
        map((response) => response.data)
        // catchError(this.errorHandler.handleError)
      );
  }

  /**
   * Elimina una categoría por su ID.
   * @param id Identificador de la categoría a eliminar.
   */
  delete(id: number): Observable<GenericResponse<void>> {
    const body = { idCategoria: id };
    return this.http.post<GenericResponse<void>>(`${this.resourceUrl}/delete`, body)
      .pipe(
        // catchError(this.errorHandler.handleError)
      );
  }
  

  
}
