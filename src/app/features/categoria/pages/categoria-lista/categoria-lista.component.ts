import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../../../../core/models/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrl: './categoria-lista.component.css'
})
export class CategoriaListaComponent {
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private router: Router) {}

  ngOnInit(): void {
    this.cargarCategoria();
  }

  cargarCategoria(): void {
    // this.categoriaService.getAll().subscribe((data) => {
    //   this.categorias = data;
    //   console.log("los datos que tengo,",data);
      
    // });
    this.categoriaService.getAll().subscribe({
      next: (data) => this.categorias = data,
      error: (err) => console.error('Error recibido:', err)
    })
  }

  // editarCategoria(id: number): void {
  //   this.router.navigate(['/categorias/editar', id]); // Usa el `id` que recibe correctamente
  // }

  // eliminarCategoria(id: number): void {
  //   if (confirm('¿Estás seguro de eliminar esta categoría?')) {
  //     this.categoriaService.delete(id).subscribe(() => this.cargarCategoria());
  //   }
  // }
}
