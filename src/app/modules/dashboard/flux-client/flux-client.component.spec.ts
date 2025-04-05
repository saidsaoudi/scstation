import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxClientComponent } from './flux-client.component';

describe('FluxClientComponent', () => {
  let component: FluxClientComponent;
  let fixture: ComponentFixture<FluxClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FluxClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluxClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
