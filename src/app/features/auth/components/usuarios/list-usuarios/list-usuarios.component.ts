import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css'
})
export class ListUsuariosComponent {
  constructor( private _AuthService: AuthService){
  }
  listaUser: any[] = [];
  filteredUsers: any[] = []; // Usuarios filtrados
  searchText: string = ''; 
  p: number = 1;
  
  ngOnInit() {
    this.cargarUsers();
  }

  cargarUsers(){

    this._AuthService.getUser().subscribe(resp => {
      this.listaUser = resp;
      // this.filteredUsers = this.listaUser; // Actualizar los usuarios filtrados cuando se cargan los usuarios
    });
   }

   filterUsers() {
    if (this.searchText) {
      console.log("estoy buscando");
      return this.listaUser.filter(data =>
          (data.nombres?.toLowerCase() ?? '').includes(this.searchText.toLowerCase()) ||
          // (data.persona.apellidos?.toLowerCase() ?? '').includes(this.searchText.toLowerCase()) ||
          (data.email?.toLowerCase() ?? '').includes(this.searchText.toLowerCase())
      );
  }
  return this.listaUser;

    // if (this.searchText) {
    //   console.log("estoy buscado");
    //   return this.listaUser.filter(data =>
    //     data.persona.nombres.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     data.persona.apellidos.toLowerCase().includes(this.searchText.toLowerCase()) ||
    //     data.mail.toLowerCase().includes(this.searchText.toLowerCase())
    //   );
    // }
    // return this.listaUser;
  }
}
