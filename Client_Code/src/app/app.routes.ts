/* app.routes.ts */

import { Routes, RouterModule } from '@angular/router';
// target route components here...
import { VehicleLookupComponent } from './components/vehicle-lookup/vehicle-lookup.component';
import { CreateRegistrationComponent } from './components/create-registration/create-registration.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { LiveStatsComponent } from './components/live-stats/live-stats.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/vehicleLookup',
		pathMatch: 'full'
	},
	{
		path: 'vehicleLookup',
		component: VehicleLookupComponent
	},
	{
		path: 'createRegistration',
		component: CreateRegistrationComponent
	},
	{
		path: 'vehicleDetail/:id',
		component: VehicleDetailComponent
	},
	{
		path: 'livestats',
		component: LiveStatsComponent
	}
];

export const appRouterModule = RouterModule.forRoot(appRoutes);
