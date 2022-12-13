import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() defaultColor = '';
  constructor(private el: ElementRef) {
    //this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'blue');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
}
