import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Vehicle } from '../../interfaces/vehicle';
import { DialogModule } from 'primeng/primeng';
import { VehicleTransferStatusComponent } from './vehicle-transfer-status/vehicle-transfer-status.component';
import {Http} from '@angular/http'


@Component({
  selector: 'app-vehicle-transfer',
  templateUrl: './vehicle-transfer.component.html',
  styleUrls: ['./vehicle-transfer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehicleTransferComponent implements OnInit {

  @Input()
  public vehicleDetails: Vehicle;
  private saleDate:Date;
  private isDisplayTransferDialog = false;
  private transferLicenseNum = '';

  constructor(private http:Http) { }

  ngOnInit() {
  }

  showTransferDialog() {
    this.isDisplayTransferDialog = true;
    this.http.post('http://kvrnsit.westus.cloudapp.azure.com:8080/blockchain/assets/transfervehicle',{  
        v5cid: this.vehicleDetails.v5cid,
        identity: "DVLA",
        OwnerType:"Manufacturer",
        ownername:"Alfa_Romeo"

    }).subscribe(
      (data)=>{
        console.log(data);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  generateLicense() {
    this.transferLicenseNum = '8B12208';
  }

}
