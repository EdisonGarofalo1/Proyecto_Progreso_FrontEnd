import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ListUsuariosComponent } from './components/usuarios/list-usuarios/list-usuarios.component';
import { SaveUsuariosComponent } from './components/usuarios/save-usuarios/save-usuarios.component';
import { ListPerfilesComponent } from './components/perfiles/list-perfiles/list-perfiles.component';
import { SavePerfilesComponent } from './components/perfiles/save-perfiles/save-perfiles.component';



@NgModule({
  declarations: [
    LoginComponent,
    ListUsuariosComponent,
    SaveUsuariosComponent,
    ListPerfilesComponent,
    SavePerfilesComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
