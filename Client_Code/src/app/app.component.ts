import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';
import { UserStatusService } from './services/auth/user-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  title = 'app';
}
