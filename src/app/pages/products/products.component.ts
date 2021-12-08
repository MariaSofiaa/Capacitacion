import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from './interfaces/product.interface';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from 'src/app/shared/services/shopping-cart.service';

@Component({
  selector: 'app-products',
  template: 
  `
  <section class="products">
    <app-product
        (addToCartClick)="addToCart($event)"
        [product]="product"
        *ngFor="let product of products"
    ></app-product>
</section>
  `,

  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  shoppingCartSvc: any;

  constructor(private productsSvc: ProductService) { }

  ngOnInit(): void {
    this.productsSvc.getProducts()
    .pipe(
      tap((products: Product[]) => this.products = products)
    )
    .subscribe();
  }

  addToCart(product: Product): void {
    console.log('Add to cart', product);
    this.shoppingCartSvc.updateCart(product);
  }

}
