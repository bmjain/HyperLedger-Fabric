import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleTransferComponent } from './vehicle-transfer.component';

describe('VehicleTransferComponent', () => {
  let component: VehicleTransferComponent;
  let fixture: ComponentFixture<VehicleTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
