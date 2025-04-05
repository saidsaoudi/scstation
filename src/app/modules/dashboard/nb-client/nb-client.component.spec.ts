import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbClientComponent } from './nb-client.component';

describe('NbClientComponent', () => {
  let component: NbClientComponent;
  let fixture: ComponentFixture<NbClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NbClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
