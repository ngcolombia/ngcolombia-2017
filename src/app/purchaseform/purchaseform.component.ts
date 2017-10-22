import { environment } from './../../environments/environment.prod';
import { CheckoutResponse } from './../shared/models/checkout-response.model';
import { MatSnackBar } from '@angular/material';
import { TicketCheckout } from './../shared/models/ticket-request.model';
import { AttendantInformation } from './../shared/models/attendant-information.model';
import { TicketCheckoutService } from './../shared/services/ticket-checkout.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { matchingEmails } from './validators/validators';



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
	checkoutInformation: CheckoutResponse;
	loading = false;
	recaptchaSiteKey = environment.recaptchaSiteToken;
	attendantInformation: AttendantInformation = new AttendantInformation('', '', '', '' , '', [], '');

	purchaseItemsLabels: any = {
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
	};

	private payUFormElement: ElementRef;
	@ViewChild('payUForm') set payUForm(content: ElementRef) {
		this.payUFormElement = content;
		if (this.payUFormElement) {
			this.payUFormElement.nativeElement.submit();
		}
	}

	constructor(private ticketCheckoutService: TicketCheckoutService, private snackbar: MatSnackBar) { 
		localStorage.purchaseItems = 'mcw1';
	}

	ngOnInit(): void {

		if (localStorage.purchaseItems) {
			const itemsString = localStorage.purchaseItems;

			if (itemsString.indexOf('mc') !== -1) {
				this.attendantInformation.tickets.push(new TicketCheckout('main-conference'));
			}
			if (itemsString.indexOf('w1') !== -1) {
				this.attendantInformation.tickets.push(new TicketCheckout('workshop-1' ));
			}
			if (itemsString.indexOf('w2') !== -1) {
				this.attendantInformation.tickets.push(new TicketCheckout('workshop-2' ));
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
		this.attendantInformation.tickets.forEach((ticket) => {
			total += this.purchaseItemsLabels[ticket.ticketCode].cost;
		});
		this.purchaseTotal = total;
	}


	removeItem(index) {
		this.attendantInformation.tickets.splice(index, 1);
		this.calculatePurchaseTotal();
	}


	resolved(captchaResponse: string) {
		this.captchaIsValid = captchaResponse !== null ? true : false;
		this.attendantInformation.tokenCaptcha = captchaResponse;
	}


	onSubmit() {
		if (this.attendantInformationForm && this.captchaIsValid) {
			this.loading = true;
			this.ticketCheckoutService.saveCheckout(this.attendantInformation)
				.subscribe(
					(response) => {
						this.checkoutInformation = response;
						this.loading = false;
					},
					(error: any) => {
						this.loading = false;
						let message = 'Technical Error, please try again';

						if (error.message) {
							message = error.message;
						}

						this.snackbar.open(message, 'Close', {
							duration: 5000
						});
					},
					() => { this.loading = false; }
				);
		}
	}

}
