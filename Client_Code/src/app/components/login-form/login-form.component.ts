import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements AfterViewInit {

  private uName = '';
  private password = '';
  private submitted = false;
  private loginForm: NgForm;
  @ViewChild('loginForm') compForm: NgForm;
  private formErrors = {
    name: ''
    //, password: ''
  };
  private validationMessages = {
    'name': {
      'required' : 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    }
    //, password
  };

  constructor() {}

  ngAfterViewInit() {
    if (this.compForm) {
        this.compForm.valueChanges.subscribe(
          data => this.onValueChanged(data)
        );
      }
  }

  onSubmit() {
    this.submitted = true;
  }

  onValueChanged(data?: any) {
    const form = this.compForm.form;
    for(const field in this.formErrors) {
      // clear out existing messages
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '';
        }
      }
    }
  }

}
