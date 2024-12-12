import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  private http = inject(HttpClient);

  backendUrl = 'http://localhost:4000/product';

  getAllProducts(){
    return this.http.get<Product[]>(`${this.backendUrl}/getAllProducts`);
  }
}
