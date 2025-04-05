import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TauxDisponibiliteComponent } from './taux-disponibilite.component';

describe('TauxDisponibiliteComponent', () => {
  let component: TauxDisponibiliteComponent;
  let fixture: ComponentFixture<TauxDisponibiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TauxDisponibiliteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TauxDisponibiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
