
export class EventSchedule {
	constructor(
		public startingTime: string,
		public endingTime: string,
		public eventName: string,
		public eventDescription: string,
		public facilitator: string,
		public imgUrl: string,
		public isWorkshop: boolean = false,
		public workshop_1: EventSchedule = null,
		public workshop_2: EventSchedule = null
	) { }
}
