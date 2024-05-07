import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    SharedComponent,
    BrowserModule,
    BrowserAnimationsModule
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SharedModule { }