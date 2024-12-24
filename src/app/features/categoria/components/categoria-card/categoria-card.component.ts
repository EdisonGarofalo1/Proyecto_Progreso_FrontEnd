import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Categoria } from '../../../../core/models/categoria.interface';

@Component({
  selector: 'app-categoria-card',
  templateUrl: './categoria-card.component.html',
  styleUrl: './categoria-card.component.css'
})
export class CategoriaCardComponent {
  @Input() categorias: Categoria[] = [];
  @Output() onEdit = new EventEmitter<number>();
  @Output() onDelete = new EventEmitter<number>();

  editar(id: number): void {
    this.onEdit.emit(id); // Emitiendo correctamente un número
  }

  eliminar(id: number): void {
    this.onDelete.emit(id); // Emitiendo correctamente un número
  }
}
