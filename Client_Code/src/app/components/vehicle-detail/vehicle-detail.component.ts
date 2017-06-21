import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VehicleDetailService } from './vehicle-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from '../../interfaces/vehicle';

@Component({
	selector: 'app-vehicle-detail',
	templateUrl: './vehicle-detail.component.html',
	styleUrls: ['./vehicle-detail.component.scss'],
	providers: [VehicleDetailService]
})
export class VehicleDetailComponent implements OnInit {

	@Input()
	public details: Vehicle;
	public statsVisible: boolean = false;
	private historyToggleTitleHide = "hide title history";
	private historyToggleTitleShow = "show title history";
	private historyToggleTitle = this.historyToggleTitleHide;
	private historyToggleClassnameHide = "fa-toggle-up";
	private historyToggleClassnameShow = "fa-toggle-down";
	private historyToggleClassname = this.historyToggleClassnameHide;
	private isHideHistory = true;



	@Output()
  transferReqEmitter:EventEmitter<Vehicle> = new EventEmitter();

	constructor(private vehicleDetailService:VehicleDetailService,
							private route: ActivatedRoute) {
	}

	ngOnInit() {

		console.log('details id', this.details);
	}

	initTransfer() {
		this.transferReqEmitter.emit(this.details);
	}
	showStats() {
		this.statsVisible = true;
	}
	showDetails() {
		this.statsVisible = false;
	}

	toggleHistory() {
		// update tooltip
		this.historyToggleTitle = (this.isHideHistory) ?
			this.historyToggleTitleShow: this.historyToggleTitleHide;
		// update icon
		this.historyToggleClassname = (this.isHideHistory) ?
			this.historyToggleClassnameShow: this.historyToggleClassnameHide;
		// show/hide
		this.isHideHistory = !this.isHideHistory;
	}

}
