import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleLookupComponent } from './vehicle-lookup.component';

describe('VehicleLookupComponent', () => {
  let component: VehicleLookupComponent;
  let fixture: ComponentFixture<VehicleLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
