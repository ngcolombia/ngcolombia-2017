import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-purchaseform',
  templateUrl: './purchaseform.component.html',
  styleUrls: ['./purchaseform.component.scss']
})
export class PurchaseformComponent implements OnInit {

  @ViewChild('attendantForm') public userFrm;
  
  public showFrm(): void{
      console.log(this.userFrm);
  }

  attendantInformation = {
    fullName: '',
    email: '',
    emailConfirmation: '',
    idNumber: '',
    phone: ''
  }

  fullNameFormControl = new FormControl('', [Validators.required]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  emailConfirmFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);

  idNumberFormControl = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
   let isValid = this.fullNameFormControl.valid && this.emailFormControl.valid && this.emailConfirmFormControl.valid && this.idNumberFormControl.valid;
   isValid ? console.log('Todo rai') : console.log('Malo');
  }
}
