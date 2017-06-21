import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsVehicleInformationComponent } from './form-fields-vehicle-information.component';

describe('FormFieldsVehicleInformationComponent', () => {
  let component: FormFieldsVehicleInformationComponent;
  let fixture: ComponentFixture<FormFieldsVehicleInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFieldsVehicleInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldsVehicleInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
