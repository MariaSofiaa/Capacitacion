import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
//decorador
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl='http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  //Método que hace una petición http 
  // lo va responder un tipo observable 
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }



}
