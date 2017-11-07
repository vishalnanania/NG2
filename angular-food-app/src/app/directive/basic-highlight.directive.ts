import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    //this.elementRef.nativeElement.style.color = "red";
  }

  @HostBinding('style.color') color = 'red';

  @HostListener('mouseenter') mouseenter(eventData){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    this.color = 'green';
  }

  @HostListener('mouseleave') mouseleave(eventData){
    this.color = 'red';
  }

  @HostListener('mousedown') mousedown(eventData){
      this.color = 'yellow';
  }

  @HostListener('mouseup') mouseup(eventData){
      this.color = 'green';
  }

}
