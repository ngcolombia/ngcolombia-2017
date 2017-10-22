import { TicketCheckout } from './ticket-request.model';
export class AttendantInformation {
	constructor(
		public customerId: string,
		public customerName: string,
		public email: string,
		public confirmationEmail: string,
		public customerPhoneNumber: string,
		public tickets: TicketCheckout[],
		public tokenCaptcha: string
	) { }
}