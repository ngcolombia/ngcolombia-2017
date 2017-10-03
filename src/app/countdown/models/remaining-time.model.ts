export class RemainingTime {
	constructor(
		public days: number,
		public hours: number,
		public minutes: number,
		public seconds: number) { }

	get hasStarted(): boolean {
		return this.days <= 0 && this.hours <= 0 && this.minutes <= 0 && this.seconds <= 0;
	}
}
