import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import { LayoutComponent } from '../../core/layout/layout/layout.component';
import { ListUsuariosComponent } from './components/usuarios/list-usuarios/list-usuarios.component';
import { SaveUsuariosComponent } from './components/usuarios/save-usuarios/save-usuarios.component';
const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'auth',
    component: LayoutComponent,
    //  canActivate: [ValidarTokenGuard],
    // canLoad: [ValidarTokenGuard],
    children: [
      { path: 'list', component: ListUsuariosComponent },
       { path: 'create', component: SaveUsuariosComponent },
      // { path: 'edit/:id', component: UsuarioAddComponent },
      // { path: 'carga-masiva', component: UsuarioCargaMasivaComponent },
    ]
  },

  { path: '**', redirectTo: 'login' }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
