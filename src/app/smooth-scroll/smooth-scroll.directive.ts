import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
	@Input() navigateToElement: string;

	constructor(element: ElementRef) { }

	scrollTo(yPoint: number, duration: number): void {
		setTimeout(() => {
			window.scrollTo(0, yPoint);
		}, duration);
		return;
	}

	smoothScroll(targetElementId: string): void {
		const startY = this.getCurrentYPosition();
		const stopY = this.getTargetElementYPosition(targetElementId);
		const distance = stopY > startY ? stopY - startY : startY - stopY;

		if (distance < 100) {
			window.scrollTo(0, stopY); return;
		}
		let speed = Math.round(distance / 100);

		if (speed >= 20) {
			speed = 20;
		}

		const step = Math.round(distance / 100);
		let leapY = stopY > startY ? startY + step : startY - step;
		let timer = 0;
		// Up to bottom direction
		if (stopY > startY) {
			for (let i = startY; i < stopY; i += step) {
				this.scrollTo(leapY, timer * speed);
				leapY += step;
				if (leapY > stopY) {
					leapY = stopY; timer++;
				}
			}
			return;
		}

		// from bottom to top direction
		for (let i = startY; i > stopY; i -= step) {
			this.scrollTo(leapY, timer * speed);
			leapY -= step;
			if (leapY < stopY) {
				leapY = stopY; timer++;
			}
		}
	}

	getCurrentYPosition(): number {
		// Firefox, Chrome, Opera, Safari
		if (self.pageYOffset) {
			return self.pageYOffset;
		}
		// Internet Explorer 6 - standards mode
		if (document.documentElement && document.documentElement.scrollTop) {
			return document.documentElement.scrollTop;
		}
		// Internet Explorer 6, 7 and 8
		if (document.body.scrollTop) {
			return document.body.scrollTop;
		}
		return 0;
	}

	getTargetElementYPosition(targetElementId) {
		const elm = document.getElementById(targetElementId);
		let y = elm.offsetTop;
		let node = elm;

		while (node.offsetParent && node.offsetParent !== document.body) {
			node = node.offsetParent as HTMLElement;
			y += node.offsetTop;
		}
		return y;
	}

	@HostListener('click', ['$event']) onNavigate($event) {
		this.smoothScroll(this.navigateToElement);
	}

}
