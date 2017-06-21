import { Component, OnInit, Input } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
  selector: 'app-form-fields-vehicle-information',
  templateUrl: './form-fields-vehicle-information.component.html',
  styleUrls: ['./form-fields-vehicle-information.component.scss']
})
export class FormFieldsVehicleInformationComponent implements OnInit {
  @Input() vehicle: Vehicle;
  constructor() { }

  ngOnInit() {
  }

}
