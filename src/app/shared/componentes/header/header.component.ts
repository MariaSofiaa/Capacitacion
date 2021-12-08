import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
   <!--Header-->
    <mat-toolbar color="primary">
      <span>My Store</span>
      <span class="spacer"></span>
      <app-cart> </app-cart>
    </mat-toolbar>`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{}
