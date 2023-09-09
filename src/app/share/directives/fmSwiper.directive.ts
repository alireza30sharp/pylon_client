import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[fmSwiper]'
})
export class SwiperDirective implements AfterViewInit {

  private readonly swiperElement: HTMLElement;

  @Input('config')
  config?: any;

  constructor(private el: ElementRef<HTMLElement>) {
    this.swiperElement = el.nativeElement;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      Object.assign(this.el.nativeElement, this.config);

      // @ts-ignore
      this.el.nativeElement.initialize();
    }, 1000);
 
  }
}