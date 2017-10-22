export interface CheckoutResponse {
	actionUrl: string;
	merchantId: string;
	accountId: string;
	description: string;
	referenceCode: string;
	amount: number;
	tax: number;
	taxReturnBase: number;
	currency: string;
	signature: string;
	test: string;
	buyerFullName: string;
	buyerEmail: string;
	responseUrl: string;
	confirmationUrl: string;
}
