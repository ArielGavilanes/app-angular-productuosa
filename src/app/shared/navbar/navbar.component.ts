import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  items: MenuItem[];
  constructor(private router: Router) {
    this.items = [];
    this.imagenUrl = 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png';

  }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
        ruta: '/home'
      },
      {
        label: 'Products',
        icon: PrimeIcons.CALCULATOR,
        ruta: '/products'
      },
      {
        label: 'User',
        icon: PrimeIcons.USER,
        ruta: '/user'
      }
    ];
  }

 navigate(route: string) {
    this.router.navigateByUrl(route);
  }
  @Input() imagenUrl: string;

}
