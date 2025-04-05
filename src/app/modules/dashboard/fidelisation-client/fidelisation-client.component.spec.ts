import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidelisationClientComponent } from './fidelisation-client.component';

describe('FidelisationClientComponent', () => {
  let component: FidelisationClientComponent;
  let fixture: ComponentFixture<FidelisationClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FidelisationClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FidelisationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
