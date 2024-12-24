import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './pages/categoria-lista/categoria-lista.component';
//import { CategoriaListaComponent } from './components/categoria-lista/categoria-lista.component';
import { CategoriaCardComponent } from './components/categoria-card/categoria-card.component';
import { LayoutComponent } from '../../core/layout/layout/layout.component';

const routes: Routes = [

  {
    path: 'categorias',
    component: LayoutComponent,
    children: [
      { path: 'listar', component: CategoriaListaComponent },
      { path: '**', redirectTo: 'listar' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
