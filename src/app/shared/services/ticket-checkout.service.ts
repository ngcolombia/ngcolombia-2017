import { AttendantInformation } from './../models/attendant-information.model';
import { environment } from './../../../environments/environment';
import { CheckoutResponse } from './../models/checkout-response.model';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TicketCheckoutService {
	purchaseEndpointUrl = `${environment.apiBaseUrl}/purchase`;
	constructor(private http: Http) { }

	saveCheckout(attendantInformation: AttendantInformation): Observable<CheckoutResponse> {
		return this.http.post(this.purchaseEndpointUrl, attendantInformation)
						.map(response => response.json() as CheckoutResponse);
	}

}
