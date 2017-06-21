import { Injectable } from '@angular/core';

@Injectable()
export class VehicleDetailService {

	constructor() { }

	getDetails() {
		return {
			history: [],
			statistics: {},
			registrationDetails: {
				CurrentTitleInformation: {
					"State": "California",
					"IssueDate": "07/10/2014",
					"Odometer": "000080326",
					"ActualMileage": "Yes"
				},
				HistoricalTitleInformation: {
					"State": "California",
					"IssueDate": "05/23/2012",
					"Odometer": "000000008",
					"ActualMileage": "Yes"
				},
				JunkSalvageInformation: {},
				LienInformation: {},
				OwnerInformation: [
					{
						"FullName": "",
						"LicenseNumber": "",
						"State": "",
						"Residence": ""
					},
					{
						"FullName": "",
						"LicenseNumber": "",
						"State": "",
						"Residence": ""
					}
				],
				DetailedVehicleInformation: {
					"bodytype": "2D Coupe",
					"DriveLine": "Rear Wheel",
					"fueltype": "Gas",
					"Model": "370z",
					"ModelYear": "2012",
					"TrimLevel": "Sport",
					"Manufactured": "Japan",
					"EngineType": "3.7L V6 DOHC",
					"Make": "Nissan",
					"Corporation": "Nissan",
					"ProductSeqNo": "12342",
					"vehicletype": "Auto" 
				},
				Dimensions: {
					"BaseCurbWeight": 3292,
					"Height": 56.5,
					"Width": 69
				}
			}
		};

	} // no-op

}
