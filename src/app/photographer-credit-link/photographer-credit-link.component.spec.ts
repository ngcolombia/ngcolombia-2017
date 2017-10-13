import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerCreditLinkComponent } from './photographer-credit-link.component';

describe('PhotographerCreditLinkComponent', () => {
	let component: PhotographerCreditLinkComponent;
	let fixture: ComponentFixture<PhotographerCreditLinkComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PhotographerCreditLinkComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PhotographerCreditLinkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
