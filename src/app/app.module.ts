import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ImageModule } from 'primeng/image';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PruebaComponent } from './prueba/prueba.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    FooterComponent,
    NavbarComponent,
    PruebaComponent
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    AvatarGroupModule,
    InputTextModule,
    DropdownModule,
    ImageModule,
    RouterModule.forRoot([
      { path: 'prueba', component: PruebaComponent },])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
