import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPlaceComponent } from './text-place.component';

describe('TextPlaceComponent', () => {
  let component: TextPlaceComponent;
  let fixture: ComponentFixture<TextPlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextPlaceComponent]
    });
    fixture = TestBed.createComponent(TextPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
