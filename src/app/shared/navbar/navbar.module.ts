import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { ImageModule } from 'primeng/image';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule
  ]
})
export class NavbarModule { }
