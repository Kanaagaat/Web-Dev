import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';

@Injectable({ providedIn: 'root' })
export class ProductService {
  // keep a signal so changes propagate automatically
  private productsSignal = signal<Product[]>([...PRODUCTS]);

  get categories(): Category[] {
    return CATEGORIES;
  }

  get products(): Product[] {
    return this.productsSignal();
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  removeProduct(id: number) {
    this.productsSignal.update(list => list.filter(p => p.id !== id));
  }

  incrementLike(id: number) {
    this.productsSignal.update(list =>
      list.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  }
}
