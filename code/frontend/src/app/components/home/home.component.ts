import { NgClass, NgFor, NgIf, SlicePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgFor, NgIf, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{

  private productService = inject(ProductService);

  constructor() { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      if(data){
        this.allProducts = data;
      }
      else{
        alert("Error in fetching data");
      }
    });
  }

  allProducts : Product[] = [];
}
