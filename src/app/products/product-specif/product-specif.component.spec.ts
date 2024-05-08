import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecifComponent } from './product-specif.component';

describe('ProductSpecifComponent', () => {
  let component: ProductSpecifComponent;
  let fixture: ComponentFixture<ProductSpecifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSpecifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSpecifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
