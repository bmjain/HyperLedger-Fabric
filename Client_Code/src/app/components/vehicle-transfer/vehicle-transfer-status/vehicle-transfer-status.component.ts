import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/primeng';

@Component({
  selector: 'app-vehicle-transfer-status',
  templateUrl: './vehicle-transfer-status.component.html',
  styleUrls: ['./vehicle-transfer-status.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VehicleTransferStatusComponent implements OnInit {
  private images: any[];
  private flag=true;
  constructor() { 
    setTimeout(()=>{
      this.flag=false;
    },12000)
  }

  ngOnInit() {
    this.images = [];
    this.images.push({source:'assets/images/rg-card-no-values.png',
                      alt:'Creating registration...',
                      title:'New Registration'});
    this.images.push({source:'assets/images/rg-card-w-values.png',
                      alt:'New registration complete.',
                      title:'Complete Registration'});
  }
  shouldShow(){
    return this.flag;
  }

}
