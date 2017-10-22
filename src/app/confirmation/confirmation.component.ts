import { CheckoutResponse } from './models/checkout-response.model';
import { TransactionResult } from './../shared/models/transaction-result.model';
import { TicketCheckoutService } from './../shared/services/ticket-checkout.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-confirmation',
	templateUrl: './confirmation.component.html',
	styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

	payUParams: any;
	checkoutResponse: CheckoutResponse;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private ticketCheckoutService: TicketCheckoutService) { }

	ngOnInit() {
		this.route
			.queryParams
			.subscribe(params => {
				this.payUParams = params;

				this.ticketCheckoutService.saveCheckoutResponse(this.payUParams)
				.subscribe(
					(response: TransactionResult) => {
						if (response.success) {
							this.checkoutResponse =	this.mapCheckoutResponse(this.payUParams);
						} else {
							this.handleError();
						}
					},
					(error) => {
						this.handleError();
					}
				);


			});
	}

	mapCheckoutResponse(params: any): CheckoutResponse {
		return new CheckoutResponse(
			params.referenceCode,
			params.processingDate,
			// The replace function was not repacing all the ocurrencies
			decodeURIComponent(params.description).split('+').join(' '),
			params.TX_VALUE, params.currency);
	}

	handleError(): void {
		this.router.navigate(['/purchase-error']);
	}

}
