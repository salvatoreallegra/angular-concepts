import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({ selector: '[appHighlight]', standalone: true })
export class HighlightDirective {
  @Input('appHighlight') color = 'yellow';
  constructor(private el: ElementRef<HTMLElement>) {}
  @HostListener('mouseenter') on() {
    this.el.nativeElement.style.background = this.color;
  }
  @HostListener('mouseleave') off() {
    this.el.nativeElement.style.background = '';
  }
}
