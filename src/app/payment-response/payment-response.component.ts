import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { TicketCheckoutService } from './../shared/services/ticket-checkout.service';
import { TransactionResult } from './../shared/models/transaction-result.model'

import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-payment-response',
	templateUrl: './payment-response.component.html',
	styleUrls: ['./payment-response.component.scss']
})
export class PaymentResponseComponent implements OnInit {

	payUParams: any;
	isPending: boolean;

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
							this.handleSuccess();
						} else if (response.pending) {
							this.handlePending();
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


	handleError(): void {
		this.router.navigate(['/purchase-error']);
	}

	handlePending(): void {
		this.router.navigate(['/pending'], { queryParamsHandling: 'preserve'});
	}

	handleSuccess(): void {
		this.router.navigate(['/confirmation'], { queryParamsHandling: 'preserve'});
	}

}
