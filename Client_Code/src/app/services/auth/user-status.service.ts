import { Injectable } from '@angular/core';

@Injectable()
export class UserStatusService {

  constructor() { }

  isLoggedIn():boolean {
    return true;
  } // stub
  getUserRole():string {
    return 'DMV';
  } // stub
}
