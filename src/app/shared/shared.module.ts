import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    SharedComponent,
    BrowserModule,
    BrowserAnimationsModule
  ],
  imports: [
    CommonModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    MenubarModule,
    InputTextModule
  ]
})
export class SharedModule { 

}