import { Component, OnInit } from '@angular/core';
import { VehicleLookupService } from './vehicle-lookup.service';
import { Vehicle } from '../../interfaces/vehicle';


@Component({
	selector: 'app-vehicle-lookup',
	templateUrl: './vehicle-lookup.component.html',
	styleUrls: ['./vehicle-lookup.component.scss'],
	providers: [VehicleLookupService],
})
export class VehicleLookupComponent implements OnInit {

  private vehicles = [];
  private vehicleDetails = null; // may need to back w/ a model
  private searchTerm = '';
  // todo: make these more declarative w/ a specific case for details
  private isList = true;
  private isDetails = false;
  private isTransfer = false;
  constructor(private vehicleLookupService: VehicleLookupService) {}

  ngOnInit() {
    // this.getVehicles();
  }

  /* class methods */
  getVehicles() {
    this.vehicleLookupService.getVehicles().then(
      (res) => {
        console.log(res);
        this.vehicles = res;
      }
    )
    .catch(err => {
      console.error('VehicleLookupComponent.getVehicles', err.message || err);
    });
  }

  showDetails(vehicle:Vehicle) {
    this.isList = false;
    this.isTransfer = false;
    this.isDetails = true;
    this.vehicleDetails = vehicle;
  }

  initTransfer(vehicle:Vehicle) {

      this.isList = false;
      this.isDetails = false;
      this.isTransfer = true;
  }

  doTransfer(vehicle:Vehicle) {}

}
