import { TestBed, inject } from '@angular/core/testing';

import { TicketCheckoutService } from './ticket-checkout.service';

describe('TicketCheckoutService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TicketCheckoutService]
		});
	});

	it('should be created', inject([TicketCheckoutService], (service: TicketCheckoutService) => {
		expect(service).toBeTruthy();
	}));
});
