import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    FotoPerfilComponent,
    PerfilComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [
    FotoPerfilComponent,
    PerfilComponent
  ]
})
export class UsersModule { }
