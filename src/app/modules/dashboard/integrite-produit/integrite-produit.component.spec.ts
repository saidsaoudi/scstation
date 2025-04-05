import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegriteProduitComponent } from './integrite-produit.component';

describe('IntegriteProduitComponent', () => {
  let component: IntegriteProduitComponent;
  let fixture: ComponentFixture<IntegriteProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntegriteProduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegriteProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
