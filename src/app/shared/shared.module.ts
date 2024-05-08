import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';


@NgModule({
  declarations: [
    SharedComponent,
    BrowserModule,
    BrowserAnimationsModule,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
  ]
})
export class SharedModule { 

}