import { Component, OnInit } from '@angular/core';
import { OverlayPanelModule } from 'primeng/primeng';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
