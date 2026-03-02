import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductItemComponent } from './product-item';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = {
      id: 1,
      name: 'Test',
      description: '',
      price: 0,
      rating: 0,
      image: '',
      images: [],
      link: '',
      likes: 0,
      categoryId: 1
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
