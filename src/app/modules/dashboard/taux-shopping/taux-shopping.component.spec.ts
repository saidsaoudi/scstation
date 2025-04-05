import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxShoppingComponent } from './taux-shopping.component';

describe('TauxShoppingComponent', () => {
  let component: TauxShoppingComponent;
  let fixture: ComponentFixture<TauxShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
