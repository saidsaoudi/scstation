import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypologieClientsComponent } from './typologie-clients.component';

describe('TypologieClientsComponent', () => {
  let component: TypologieClientsComponent;
  let fixture: ComponentFixture<TypologieClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypologieClientsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypologieClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
