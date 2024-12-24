import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductosComponent } from './components/producto/list-productos/list-productos.component';
import { SaveProductoComponent } from './components/producto/save-producto/save-producto.component';
import { SaveCategoriaComponent } from './components/categoria/save-categoria/save-categoria.component';
import { ListCategoriasComponent } from './components/categoria/list-categorias/list-categorias.component';



@NgModule({
  declarations: [
    ListProductosComponent,
    SaveProductoComponent,
    SaveCategoriaComponent,
    ListCategoriasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductoModule { }
