export class CheckoutConfirmation {

	static mapCheckoutResponse(params: any): CheckoutConfirmation {
		return new CheckoutConfirmation(
			params.referenceCode,
			params.processingDate,
			// The replace function was not repacing all the ocurrencies
			decodeURIComponent(params.description).split('+').join(' '),
			params.TX_VALUE, params.currency);
	}

	constructor(
		public referenceId: string,
		public processDate: string,
		public description: string,
		public value: number,
		public currency: string
	) {}
}
