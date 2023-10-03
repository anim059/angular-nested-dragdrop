import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDropCompartmentComponent } from './another-drop-compartment.component';

describe('AnotherDropCompartmentComponent', () => {
  let component: AnotherDropCompartmentComponent;
  let fixture: ComponentFixture<AnotherDropCompartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnotherDropCompartmentComponent]
    });
    fixture = TestBed.createComponent(AnotherDropCompartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
