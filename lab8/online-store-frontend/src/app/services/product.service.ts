import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
// import { PRODUCTS } from '../data/products';
// import { CATEGORIES } from '../data/categories';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })





// export class ProductService {
//   // keep a signal so changes propagate automatically
//   // private productsSignal = signal<Product[]>([...PRODUCTS]);
//   private API_BASE = 'http://127.0.0.1:8000/api';

//   private productsSignal = signal<Product[]>([]);
//   private categoriesSignal = signal<Category[]>([]);

//   get categories(): Category[] {
//     return this.categoriesSignal();;
//   }

//   get products(): Product[] {
//     return this.productsSignal();
//   }

//   getProductsByCategory(categoryId: number): Product[] {
//     return this.productsSignal().filter(p => p.categoryId === categoryId);
//   }

//   removeProduct(id: number) {
//     this.productsSignal.update(list => list.filter(p => p.id !== id));
//   }

//   incrementLike(id: number) {
//     this.productsSignal.update(list =>
//       list.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
//     );
//   }
// }


export class ProductService {
  private apiBase = 'http://127.0.0.1:8000/api';

  private productsSignal = signal<Product[]>([]);
  private categoriesSignal = signal<Category[]>([]);

  constructor(private http: HttpClient) {}

  get categories(): Category[] {
    return this.categoriesSignal();
  }

  get products(): Product[] {
    return this.productsSignal();
  }

  loadProducts() {
    this.http
      .get<{ products: Product[] }>(`${this.apiBase}/products/`)
      .subscribe((response) => {
        this.productsSignal.set(response.products);
      });
  }

  loadCategories() {
    this.http
      .get<{ categories: Category[] }>(`${this.apiBase}/categories/`)
      .subscribe((response) => {
        this.categoriesSignal.set(response.categories);
      });
  }

  loadProductsByCategory(categoryId: number) {
    this.http
      .get<{ products: Product[] }>(
        `${this.apiBase}/categories/${categoryId}/products/`
      )
      .subscribe((response) => {
        this.productsSignal.set(response.products);
      });
  }

  loadProduct(id: number) {
    return this.http.get<{ product: Product }>(
      `${this.apiBase}/products/${id}/`
    );
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsSignal().filter((p) => p.categoryId === categoryId);
  }

  removeProduct(id: number) {
    this.productsSignal.update((list) => list.filter((p) => p.id !== id));
  }

  incrementLike(id: number) {
    this.productsSignal.update((list) =>
      list.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)),
    );
  }
}