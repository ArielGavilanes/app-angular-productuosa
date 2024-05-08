import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    FotoPerfilComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FotoPerfilComponent,
    PerfilComponent 
  ]
})
export class UsersModule { }
