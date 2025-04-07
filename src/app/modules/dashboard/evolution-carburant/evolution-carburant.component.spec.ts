import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionCarburantComponent } from './evolution-carburant.component';

describe('EvolutionCarburantComponent', () => {
  let component: EvolutionCarburantComponent;
  let fixture: ComponentFixture<EvolutionCarburantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionCarburantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionCarburantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
