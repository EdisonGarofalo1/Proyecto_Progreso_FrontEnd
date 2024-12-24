import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaCardComponent } from './components/categoria-card/categoria-card.component';
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './pages/categoria-form/categoria-form.component';


@NgModule({
  declarations: [
    CategoriaCardComponent,
    CategoriaListaComponent,
    CategoriaFormComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriaModule { }
