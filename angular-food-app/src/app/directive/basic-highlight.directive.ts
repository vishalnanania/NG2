import { Directive, OnInit, Input, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {
  @Input() defaultColor = 'red';
  @Input() highLightColor = 'green';
  @HostBinding('style.color') color = 'red';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.color = this.defaultColor;
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    //this.elementRef.nativeElement.style.color = "red";
  }

  @HostListener('mouseenter') mouseenter(eventData){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
    this.color = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData){
    this.color = this.defaultColor;
  }

}
