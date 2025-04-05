import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempsPriseChargeComponent } from './temps-prise-charge.component';

describe('TempsPriseChargeComponent', () => {
  let component: TempsPriseChargeComponent;
  let fixture: ComponentFixture<TempsPriseChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempsPriseChargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempsPriseChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
