import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './directives/parallax.directive';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { SwiperDirective } from './directives/fmSwiper.directive';
import { SwiperComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ParallaxDirective, HideHeaderDirective, SwiperDirective,SwiperComponent],
  imports: [
    CommonModule
  ],
  exports: [ParallaxDirective, HideHeaderDirective,SwiperComponent,
  RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
