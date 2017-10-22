import { EventSchedule } from './event-schedule.model';
export const mainConferenceData: EventSchedule[] = [
	new EventSchedule(
		'2:10 PM',
		'2:30 PM',
		'Welcome',
		// tslint:disable-next-line:max-line-length
		null,
		'Juan Herrera',
		'./assets/img/profiles/juan_herrera.jpg'),
	new EventSchedule(
		'2:30 PM',
		'3:00 PM',
		'TBD',
		// tslint:disable-next-line:max-line-length
		null,
		'Josue Gutierrez',
		'./assets/img/profiles/josue_gutierrez.jpg'),
	new EventSchedule(
		'3:00 PM',
		'3:20 PM',
		'TBD',
		// tslint:disable-next-line:max-line-length
		null,
		'Simona Cotin',
		'./assets/img/profiles/simona_cottin.jpg'),
	new EventSchedule(
		'3:20 PM',
		'3:40 PM',
		'TypeScript of things: Integrating Angular Apps with Node.js and RESTful services',
		// tslint:disable-next-line:max-line-length
		'Learn how you can create your RESTful services through Node.js and TypeScript, and then call these endpoints using the HTTP client in Angular. Best practices and Observables will be covered as well.',
		'Luis Aviles',
		'./assets/img/profiles/luis_aviles.jpg'),
	new EventSchedule(
		'3:40 PM',
		'4:00 PM',
		'TBD',
		// tslint:disable-next-line:max-line-length
		null,
		'Carlos Angulo',
		'./assets/img/profiles/carlos_angulo.jpg'),
	new EventSchedule(
		'4:00 PM',
		'4:20 PM',
		'Break',
		// tslint:disable-next-line:max-line-length
		null,
		null,
		'./assets/img/snack.svg'),
	new EventSchedule(
		'4:20 PM',
		'4:50 PM',
		'NGAR',
		// tslint:disable-next-line:max-line-length
		'NativeScript is a great framework to create native applications and it uses Angular to make it even better. In this talk we will see the potential of all of these frameworks.',
		'Jorge Cano',
		'./assets/img/profiles/jorge_cano.jpg'),
	new EventSchedule(
		'4:50 PM',
		'5:10 PM',
		'Angular Performance Checklist',
		// tslint:disable-next-line:max-line-length
		'High performance applications always bring better user engagement and experience. We often implicitly judge the quality of given application by it’s initial load time and responsiveness. In the world of the single-page applications we usually have to transfer huge amount of resources over the wire which dramatically impacts the initial load time. On top of that, performing change detection over the entire component tree, corresponding to a complex UI, often causes frame drops because of heavy computations happening in the main thread.In the first part of this talk we’re going explain essential practices that can help us reduce the initial load time of our Angular applications. In it’s second part, we’ll discuss different techniques which can improve the runtime performance of our application in order to help us achieve rendering with 60fps!',
		'Minko Gechev',
		'./assets/img/profiles/minko_gechev.jpg'),
	new EventSchedule(
		'5:10 PM',
		'5:30 PM',
		'TBD',
		// tslint:disable-next-line:max-line-length
		null,
		'Israel Guzman',
		'./assets/img/profiles/israel_guzman.png'),
	new EventSchedule(
		'5:30 PM',
		'5:50 PM',
		'Angular + Firebase: Perfect match',
		// tslint:disable-next-line:max-line-length
		'When you start a project, too many questions arise: Which stack will I use? Where will I host my app? What’s the most appropriate database?. In this talk you will meet a duo that will answers all of these questions.',
		'Andrés Villanueva',
		'./assets/img/profiles/andres_villanueva.jpg'),
	new EventSchedule(
		'5:50 PM',
		'6:00 PM',
		'AMA: Ask me anything',
		// tslint:disable-next-line:max-line-length
		null,
		'All speakers',
		'./assets/img/mic.svg'),
		new EventSchedule(
		'6:00 PM',
		null,
		'Closure',
		// tslint:disable-next-line:max-line-length
		null,
		null,
		null)
];

export const workshopData: EventSchedule[] = [
	new EventSchedule(
		'8:00 AM',
		'12:00 AM',
		null,
		// tslint:disable-next-line:max-line-length
		null,
		null,
		null,
		true,
		new EventSchedule(
			'8:00 AM',
			'12:00 AM',
			'Angular: from zero to hero',
			// tslint:disable-next-line:max-line-length
			'In this workshop we\'re going to learn some Angular concepts and we\'re going to build an application from scratch to manipulate data like a pro',
			'Josue Gutierrez',
			'./assets/img/profiles/josue_gutierrez.jpg'),
		new EventSchedule(
			'8:00 AM',
			'12:00 AM',
			'RxJS Like a Boss',
			// tslint:disable-next-line:max-line-length
			'RxJS is a library that has become very popular lately. Join us to meet the RxJS world and become a boss with it.',
			'Jorge Cano',
			'./assets/img/profiles/jorge_cano.jpg')
	)
];

export const registrationData: EventSchedule[] = [
	new EventSchedule(
		'7:00 AM',
		null,
		'Registration',
		null,
		null,
		null)
];

