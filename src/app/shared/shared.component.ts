import { Component } from '@angular/core';

import { PrimeIcons, MenuItem } from 'primeng/api';


@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent {


  items: MenuItem[];

  constructor() {
    this.items = [];
  }
  
  ngOnInit() {
      this.items = [
          {
              label: 'Home',
              icon: PrimeIcons.HOME,
          },
          {
            label: 'Products',
            icon: PrimeIcons.CALCULATOR
        },
          {
              label: 'User',
              icon: PrimeIcons.USER
          }
      ];
  }


}
