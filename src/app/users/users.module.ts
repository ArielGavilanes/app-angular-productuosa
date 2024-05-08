import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FotoPerfilComponent } from './foto-perfil/foto-perfil.component';
import { PerfilComponent } from './perfil/perfil.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FotoPerfilComponent,
    PerfilComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CarouselModule,
    SharedModule],
  exports: [
    FotoPerfilComponent,
    PerfilComponent
  ]
})
export class UsersModule { }
