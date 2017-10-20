import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { matchingEmails } from "./validators/validators";



const PHONE_REGEX = /^\+?([0-9]{7,})$/;
const IDNUMBER_REGEX = /^[a-z0-9]+$/i;
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



@Component({
  selector: 'app-purchaseform',
  templateUrl: './purchaseform.component.html',
  styleUrls: ['./purchaseform.component.scss']
})
export class PurchaseformComponent implements OnInit {

  attendantInformationForm: FormGroup;

  captchaIsValid = false;

  attendantInformation = {
    fullName: '',
    email: '',
    emailConfirmation: '',
    idNumber: '',
    phone: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.attendantInformationForm = new FormGroup({
      'fullName': new FormControl(this.attendantInformation.fullName, [Validators.required]),
      'email': new FormControl(this.attendantInformation.email, [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      'emailConfirmation': new FormControl(this.attendantInformation.emailConfirmation, [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      'idNumber': new FormControl(this.attendantInformation.idNumber, [
        Validators.required,
        Validators.pattern(IDNUMBER_REGEX)]),
      'phone': new FormControl(this.attendantInformation.phone, [
        Validators.required,
        Validators.pattern(PHONE_REGEX)])
    }, matchingEmails('email', 'emailConfirmation'));
  }


  resolved(captchaResponse: string) {
    this.captchaIsValid = captchaResponse !== null ? true : false;
  }

  onSubmit() {

  }

}
