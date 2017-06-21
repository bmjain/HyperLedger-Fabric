import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRouterModule } from './app.routes';

import { OverlayPanelModule,
         DialogModule,
         GalleriaModule } from 'primeng/primeng';

import { LiveStatsComponent } from './components/live-stats/live-stats.component';
import { VehicleLookupComponent } from './components/vehicle-lookup/vehicle-lookup.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { FormFieldsVehicleInformationComponent } from './components/form-fields-vehicle-information/form-fields-vehicle-information.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { VehicleTransferComponent } from './components/vehicle-transfer/vehicle-transfer.component';
import { VehicleTransferStatusComponent } from './components/vehicle-transfer/vehicle-transfer-status/vehicle-transfer-status.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleLookupComponent,
    VehicleDetailComponent,
    CreateRegistrationComponent,
    FormFieldsVehicleInformationComponent,
    LoginComponent,
    LiveStatsComponent,
    LoginFormComponent,
    VehicleTransferComponent,
    VehicleTransferStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule,
    HttpModule,
    appRouterModule,
    FormsModule,
    OverlayPanelModule,
    DialogModule,
    GalleriaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
