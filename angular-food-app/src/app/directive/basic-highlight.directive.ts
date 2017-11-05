import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    //this.elementRef.nativeElement.style.color = "red";
  }
}
