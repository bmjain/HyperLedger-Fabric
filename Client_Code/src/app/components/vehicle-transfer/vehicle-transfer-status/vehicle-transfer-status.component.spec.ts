import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTransferStatusComponent } from './vehicle-transfer-status.component';

describe('VehicleTransferStatusComponent', () => {
  let component: VehicleTransferStatusComponent;
  let fixture: ComponentFixture<VehicleTransferStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTransferStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTransferStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
