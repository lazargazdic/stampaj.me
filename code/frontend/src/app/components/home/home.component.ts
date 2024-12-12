import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private router = inject(Router);
  private productService = inject(ProductService);

  allProducts: Product[] = [];
  allProductsChunks: any[] = [];

  ngOnInit(): void{
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.allProducts = products;
        this.chunkProducts(3);
      },
      error: (error) => {
        alert('Error fetching products');
      }
    })
  }

  chunkProducts(n: number) {
    for (let i = 0; i < this.allProducts.length; i += n) {
      this.allProductsChunks.push(this.allProducts.slice(i, i + n));
    }
  }
}
