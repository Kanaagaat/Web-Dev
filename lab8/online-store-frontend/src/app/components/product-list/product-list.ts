import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() delete = new EventEmitter<number>();

  onDelete(id: number) {
    // remove locally so list updates immediately
    this.products = this.products.filter(p => p.id !== id);
    this.delete.emit(id);
  }

  trackById(index: number, item: Product) {
    return item.id;
  }
}
