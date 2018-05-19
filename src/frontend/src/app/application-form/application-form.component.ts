import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of as observableOf, Observable } from 'rxjs';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;
  startDate = new Date(1970, 0, 1);
  minDate = new Date(1928, 0, 1);
  maxDate = new Date(2002, 0, 1);

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.applicationForm = this.fb.group({
      personalData: this.fb.group({
        fiscalCode: ['', [
          Validators.required,
          Validators.minLength(16),
          Validators.maxLength(16)
        ]],
        firstName: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]],
        lastName: ['', [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]],
        birthDate: ['', Validators.required],
        pin: ['', [
          Validators.minLength(6),
          Validators.maxLength(6)
        ]]
      }),
      workingDays: ['']
    },
      {
        validator: (g: FormGroup) => {
          return this.syncValidation(g);
        },
        asyncValidator: (g: FormGroup) => {
          return this.asyncValidation(g);
        }
      })
  }

  get fiscalCode() {
    return this.applicationForm.get('personalData.fiscalCode');
  }

  get pin() {
    return this.applicationForm.get('personalData.pin');
  }

  get firstName() {
    return this.applicationForm.get('personalData.firstName');
  }

  get lastName() {
    return this.applicationForm.get('personalData.lastName');
  }

  get birthDate() {
    return this.applicationForm.get('personalData.birthDate');
  }

  syncValidation(g: FormGroup) {
    return null;
  }

  asyncValidation(g: FormGroup) {
    console.log('async');
    return observableOf(null);
  }
}
