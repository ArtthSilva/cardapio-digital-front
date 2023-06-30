import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceProductsComponent } from './choice-products.component';

describe('ChoiceProductsComponent', () => {
  let component: ChoiceProductsComponent;
  let fixture: ComponentFixture<ChoiceProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoiceProductsComponent]
    });
    fixture = TestBed.createComponent(ChoiceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
