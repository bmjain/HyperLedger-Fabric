import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { FormFieldsVehicleInformationComponent } from '../form-fields-vehicle-information/form-fields-vehicle-information.component'
import { Vehicle } from '../../interfaces/vehicle';
@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {

  vehicle: Vehicle = {
    v5cid:'',
    identity: 'DVLA',
    VIN: '13245',
    license: '',
    make: '',
    model: '',
    colour: '',
    reg: '',
    year: null,
    fueltype: '',
    bodytype: '',
    statelicensenumber: '',
    vehicletype: '',
    motorcycleenginenumber: '',
    transportationuse: null,
    commercialvehicle: null,
    ownername: '',
    ownerdl: '',
    ownerdlstate: '',
    coownername: '',
    coownerdl: '',
    coownerdlstate: '',
    ownerphyaddr: '',
    ownermailaddr: '',
    coownerphyaddr: '',
    coownermailaddr: '',
    legalownername: '',
    legalownerphyAddr: '',
    legalownermailaddr: '',
    leaseContractID: '',
    odometerreading: null,
    vehiclepurchasedate: '',
    vehiclepurchasetype: '',
    vehiclepurchaselocation: '',
    vehicleenteredstatedate: '',
    vehicleoperatedstatedate: '',
    vehiclecost: '',
    vehiclepurchasedfrom: '',
    bodytypemod: '',
    salestaxpaid: null,
    salestaxamount: null,
    ismemofmilitary: null,
    ismemofmilitarywhenlastlicensed: null,
    scrapped: '',
    status: '',
    leasecontractid: '',
    msrp: null,
    sellingprice: null,
    statetax: null,
    State: ''
  };

  constructor(public http: Http) { }

  ngOnInit() {
  }

  noSubmit() {
    return false;
  }

  /* object methods */
  onSubmit() {
    console.log('vehicle' + this.vehicle.VIN);
    let url = 'http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/vehicles';
    console.log('posting');
    return this.http.post(url,this.vehicle)
    .toPromise().then(
      function(res) {
        // display success to user
        console.log('post returned: ' + res);
      }
    ).catch(
      function(data){
        // display fail to user
        console.log('http post failed: ' + data);
      }
    );
  }
}
