import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // SMARTPHONES
    { id: 1, name: 'iPhone 15 Pro', description: 'A17 Pro, 128GB', price: 599000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
      likes: 0, categoryId: 1 },

    { id: 2, name: 'Samsung Galaxy S23', description: '256GB', price: 479000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h87/h65/69065034727454.jpg?format=gallery-large',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-5g-8-gb-256-gb-chernyi-108915936/?c=750000000',
      likes: 0, categoryId: 1 },

    { id: 3, name: 'Xiaomi 13', description: '256GB', price: 399000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h50/86009484148766.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-13-12-gb-256-gb-zelenyi-109329846/?c=750000000',
      likes: 0, categoryId: 1 },

    { id: 4, name: 'iPhone 14', description: '128GB', price: 489000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
      likes: 0, categoryId: 1 },

    { id: 5, name: 'Samsung Galaxy A54', description: '256GB', price: 249000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000',
      likes: 0, categoryId: 1 },

    // LAPTOPS
    { id: 6, name: 'MacBook Air M2', description: '8/256', price: 689000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=750000000',
      likes: 0, categoryId: 2 },

    { id: 7, name: 'ASUS TUF F15', description: 'i7, RTX 3050', price: 599000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdd/h0f/85967875964958.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-15-6-32-gb-ssd-1000-gb-win-11-pro-fx507zc4-hx145zw-90nr0gw1-m0zbw0-119190572/?c=750000000',
      likes: 0, categoryId: 2 },

    { id: 8, name: 'HP Pavilion 15', description: 'Ryzen 5', price: 379000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4e/hb6/82089377726494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eh3007ci-15-6-16-gb-ssd-1024-gb-dos-7p438ea-uuq-111968153/?c=750000000',
      likes: 0, categoryId: 2 },

    { id: 9, name: 'Lenovo IdeaPad 3', description: 'Ryzen 5', price: 299000, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000',
      likes: 0, categoryId: 2 },

    { id: 10, name: 'Acer Aspire 5', description: 'i5', price: 349000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p76/p0f/55291864.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-spin-14-14-16-gb-ssd-1000-gb-win-11-pro-nx-khter-002w-143152048/?c=750000000',
      likes: 0, categoryId: 2 },

    // HEADPHONES
    { id: 11, name: 'AirPods Pro 2', description: 'ANC', price: 149000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      likes: 0, categoryId: 3 },

    { id: 12, name: 'Sony WH-1000XM5', description: 'NC', price: 219000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
      likes: 0, categoryId: 3 },

    { id: 13, name: 'JBL Tune 510BT', description: 'Wireless', price: 29000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
      likes: 0, categoryId: 3 },

    { id: 14, name: 'Samsung Buds 2 Pro', description: 'ANC', price: 99000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1f/p7d/53123420.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds-core-chernyi-142551258/?c=750000000',
      likes: 0, categoryId: 3 },

    { id: 15, name: 'Marshall Major IV', description: '80h', price: 89000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf3/pc1/17680136.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-chernyi-102138144/?c=750000000',
      likes: 0, categoryId: 3 },

    // TABLETS
    { id: 16, name: 'iPad 10th Gen', description: '64GB', price: 249000, rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5d/p30/30827845.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-ipad-10th-gen-2024-10-9-djuim-4-gb-256-gb-serebristyi-136504586/?c=750000000',
      likes: 0, categoryId: 4 },

    { id: 17, name: 'Galaxy Tab S9', description: '256GB', price: 389000, rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzaas-11-djuim-8-gb-128-gb-grafit-112488621/?c=750000000',
      likes: 0, categoryId: 4 },

    { id: 18, name: 'Xiaomi Pad 6', description: '128GB', price: 199000, rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
      likes: 0, categoryId: 4 },

    { id: 19, name: 'Huawei MatePad 11', description: '128GB', price: 179000, rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
      likes: 0, categoryId: 4 },

    { id: 20, name: 'Lenovo Tab P11', description: '128GB', price: 149000, rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/hdb/79994503921694.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-plus-tb-j616f-za940326ru-11-djuim-4-gb-128-gb-seryi-109848413/?c=750000000',
      likes: 0, categoryId: 4 }
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}