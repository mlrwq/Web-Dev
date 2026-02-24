import { Component, signal, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ProductList } from './components/product-list/product-list';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product-service';
import { Category } from './models/category-model';
import { Product } from './models/product-model';

@Component({
  selector: 'app-root',
  imports: [/*RouterOutlet,*/ CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  displayedProducts: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.displayedProducts = this.productService.getProductsByCategory(category.id);
  }

  onProductDeleted(productId: number): void{
    this.displayedProducts = this.displayedProducts.filter(p => p.id !== productId);
  }
}
