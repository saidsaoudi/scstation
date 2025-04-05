import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxServiceComponent } from './taux-service.component';

describe('TauxServiceComponent', () => {
  let component: TauxServiceComponent;
  let fixture: ComponentFixture<TauxServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
