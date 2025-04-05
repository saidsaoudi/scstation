import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxCaptationComponent } from './taux-captation.component';

describe('TauxCaptationComponent', () => {
  let component: TauxCaptationComponent;
  let fixture: ComponentFixture<TauxCaptationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxCaptationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxCaptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
