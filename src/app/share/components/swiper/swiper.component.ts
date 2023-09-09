import { AfterViewInit, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SwapperListModel } from './model/swiper.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements AfterViewInit {

  @Input() items: SwapperListModel[] = []
  @Input() containerClass: string = '';
  @Input() imgClass: string = '';
  @Input() bgBlurActive: boolean = true;
  @Input() options: any;
  constructor(private readonly router: Router) { }
  ngAfterViewInit(): void {

  }

  // public config: SwiperOptions = {
  //   modules: [Navigation, Pagination, A11y, Mousewheel],
  //   autoHeight: true,
  //   spaceBetween: 20,
  //   navigation: false,
  //   pagination: { clickable: true, dynamicBullets: true },
  //   slidesPerView: 1,
  //   autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  //   },
  //   centeredSlides: true,
  //   injectStyles: ['.swiper-pagination-bullet { background-color: #64B0E3; }'],
  //   breakpoints: {
  //     400: {
  //       slidesPerView: "auto",
  //       centeredSlides: false
  //     },
  //   }
  // }

  navigate(item: SwapperListModel) {
    if (item.route) {
      this.router.navigate([item.route], { queryParams: item.queryParams });
    }
  }


}
