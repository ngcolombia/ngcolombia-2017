import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[appSmoothScroll]'
})
export class SmoothScrollDirective {
	@Input() navigateToElement: string;
	currentScrollY: number;
	targetScrollPosition: number;
	currentTime: number;
	time: number;
	easing = 'easeOutSine';
	speed = 1500;

	constructor(element: ElementRef) { }

	private getCurrentYPosition(): number {
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

	private getTargetElementYPosition(targetElementId) {
		const elm = document.getElementById(targetElementId);
		let y = elm.offsetTop;
		let node = elm;

		while (node.offsetParent && node.offsetParent !== document.body) {
			node = node.offsetParent as HTMLElement;
			y += node.offsetTop;
		}
		return y;
	}

	// Easing equations from https://github.com/danro/easing-js/blob/master/easing.js
	private easeOutSine(pos): number {
		return Math.sin(pos * (Math.PI / 2));
	}

	tick() {
		this.currentTime += 1 / 60;
		console.log(`current time ${this.currentTime}, time ${this.time}`);
		const p = this.currentTime / this.time;
		const t = this.easeOutSine(p);
		console.log(`p:  ${p}, time ${t}`);
		if (p < 1) {
			requestAnimationFrame(() => this.tick());
			console.log(this.currentScrollY + ((this.targetScrollPosition - this.currentScrollY) * t));

			window.scrollTo(0, this.currentScrollY + ((this.targetScrollPosition - this.currentScrollY) * t));
		} else {
			console.log('scroll done');
			window.scrollTo(0, this.targetScrollPosition);
		}
	}

	smoothScroll(targetElementId: string): void {
		this.currentScrollY =  this.getCurrentYPosition();
		this.targetScrollPosition = this.getTargetElementYPosition(targetElementId);
		this.currentTime = 0;
		this.time = Math.max(.1, Math.min(Math.abs(this.currentScrollY - this.targetScrollPosition) / this.speed, .8));
		this.tick();
	}

	@HostListener('click', ['$event']) onNavigate($event) {
		this.smoothScroll(this.navigateToElement);
	}

}
