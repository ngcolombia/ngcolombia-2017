import { CheckoutConfirmation } from './../shared/models/checkout-confirmation.model';
import { TicketCheckoutService } from './../shared/services/ticket-checkout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-payment-pending',
	templateUrl: './payment-pending.component.html',
	styleUrls: ['./payment-pending.component.scss']
})
export class PaymentPendingComponent implements OnInit {

	payUParams: any;
	checkoutConfirmation: CheckoutConfirmation;

	constructor(
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit() {
		this.route
			.queryParams
			.subscribe(params => {
				this.payUParams = params;
				this.checkoutConfirmation = CheckoutConfirmation.mapCheckoutResponse(params);
			});
	}

}
