export class CheckoutResponse {
	constructor(
		public referenceId: string,
		public processDate: string,
		public description: string,
		public value: number,
		public currency: string
	) {}
}
