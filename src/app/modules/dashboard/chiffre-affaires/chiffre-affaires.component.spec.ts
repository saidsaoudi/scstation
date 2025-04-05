import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreAffairesComponent } from './chiffre-affaires.component';

describe('ChiffreAffairesComponent', () => {
  let component: ChiffreAffairesComponent;
  let fixture: ComponentFixture<ChiffreAffairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiffreAffairesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiffreAffairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
