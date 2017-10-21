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
  purchaseTotal;

  attendantInformation = {
    customerId: '',
    customerName: '',
    email: '',
    confirmationEmail: '',
    customerPhoneNumber: '',
    tickets: [],
    tokenCaptcha: ''
  }
  
  purchaseItemsLabels = {
    'main-conference': {
      name: 'Main conference',
      cost: 25,   
    },
    'workshop-1': {
      name: 'Workshop 1',
      cost: 20,   
    },
    'workshop-2': {
      name: 'Workshop 2',
      cost: 20,   
    }
  }

  constructor() { }

  ngOnInit(): void {
    
    if (localStorage.purchaseItems) {
      let itemsString = localStorage.purchaseItems
      
      if( itemsString.indexOf('mc') != -1 ) {
        this.attendantInformation.tickets.push({ticketCode: 'main-conference'});
      }
      if( itemsString.indexOf('w1') != -1 ) {
        this.attendantInformation.tickets.push({ticketCode: 'workshop-1'});
      }
      if( itemsString.indexOf('w2') != -1 ) {
        this.attendantInformation.tickets.push({ticketCode: 'workshop-2'});
      }
      this.calculatePurchaseTotal();
    } else {
      // ToDo: redirect user if no  localStorage.purchaseItems
    }

    this.attendantInformationForm = new FormGroup({
      'fullName': new FormControl(this.attendantInformation.customerName, [Validators.required]),
      'email': new FormControl(this.attendantInformation.email, [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      'emailConfirmation': new FormControl(this.attendantInformation.confirmationEmail, [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]),
      'idNumber': new FormControl(this.attendantInformation.customerId, [
        Validators.required,
        Validators.pattern(IDNUMBER_REGEX)]),
      'phone': new FormControl(this.attendantInformation.customerPhoneNumber, [
        Validators.required,
        Validators.pattern(PHONE_REGEX)])
    }, matchingEmails('email', 'emailConfirmation'));
  }


  calculatePurchaseTotal() {
    let total = 0;
    this.attendantInformation.tickets.forEach( (ticket)=>{
      total += this.purchaseItemsLabels[ticket.ticketCode].cost;
    });
    this.purchaseTotal = total;
  }


  removeItem(index) {
    this.attendantInformation.tickets.splice(index,1);
    this.calculatePurchaseTotal();
  }


  resolved(captchaResponse: string) {
    this.captchaIsValid = captchaResponse !== null ? true : false;
    this.attendantInformation.tokenCaptcha = captchaResponse;
  }


  onSubmit() {
    if( this.attendantInformationForm && this.captchaIsValid ){
      //ToDo: submit actions, formInformation is in this.attendantInformation
    }
  }

}
