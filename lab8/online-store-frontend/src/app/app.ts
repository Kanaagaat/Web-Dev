import { Component, signal, computed } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list';
import { ProductService } from './services/product.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  categories: any;
  selectedCategory = signal<number | null>(null);

  filteredProducts = computed(() => {
    const id = this.selectedCategory();
    return id !== null ? this.productService.getProductsByCategory(id) : [];
  });

  constructor(private productService: ProductService) {
    this.categories = this.productService.categories;
  }

  selectCategory(id: number) {
    this.selectedCategory.set(id);
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id);
  }
}
