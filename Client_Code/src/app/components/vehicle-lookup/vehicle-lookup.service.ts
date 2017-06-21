import { Injectable } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle';
import { Http, Response,  Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class VehicleLookupService {

  private vehicle: Vehicle = {
    v5cid:'',
    identity: 'DVLA',
    VIN: 'YV4902NK4F1209769',
    license: '',
    make: 'Mazda',
    model: '3',
    colour: 'Silver',
    reg: '',
    year: 2000,
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
    State: 'CA'
  };
  constructor(private http:Http) { }

  getVehicles():Promise<Vehicle[]> {
    let body = {"identity": "DVLA"};
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers});
    return this.http.post('http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/getallvehicles',
                         body, options)
            .toPromise()
            .then(response => {
              return response.json();
              //return [this.vehicle, this.vehicle];
            })
            .catch((error) => {
              console.error('vehiclelookupservice.getVehicles', error.message || error);
              //return Promise.reject(error.message|| error);
              return [this.vehicle, this.vehicle];
            });
  }

}
