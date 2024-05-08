import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  usuario: any = {
    nombre: 'Nombre del Usuario',
    apellido: 'Apellido del Usuario',
    edad: 25,
  };
}
