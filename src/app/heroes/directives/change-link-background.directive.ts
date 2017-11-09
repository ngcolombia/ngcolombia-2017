import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[ChangeLinkBackground]'
})
export class ChangeLinkBackgroundDirective implements AfterViewInit {

@Input('ChangeLinkBackground') colorToSet:string;

  constructor(private el: ElementRef) { }
  
  ngAfterViewInit() {
    this.changeBackground(this.colorToSet || 'rgba(0, 0, 0, 0.7)')
  } 

   changeBackground(color){
    this.el.nativeElement.querySelector('a').style.backgroundColor = color;
   }
}
