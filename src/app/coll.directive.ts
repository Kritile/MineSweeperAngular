import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appColl]'
})
export class CollDirective {
  @Input() collContain: number;
  constructor(private elementRef: ElementRef) {}
  @HostListener('click') changeColor() {
    switch (this.collContain) {
      case 0:
        this.elementRef.nativeElement.style.color = 'black';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      case 1:
        this.elementRef.nativeElement.style.color = 'yellow';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      case 2:
        this.elementRef.nativeElement.style.color = 'green';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      case 3:
        this.elementRef.nativeElement.style.color = 'red';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      case 4:
        this.elementRef.nativeElement.style.color = 'blue';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      case 5:
        this.elementRef.nativeElement.style.color = 'purple';
        this.elementRef.nativeElement.style.fontSize = '18px';
        break;
      default:
        console.log(this.collContain);
    }
  }
}
