import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';

import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule, IonicModule.forRoot(),
		 AppRoutingModule, HttpClientModule,
		 OAuthModule.forRoot({
			resourceServer: {
				sendAccessToken: true
			}
		})
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent]
})
export class AppModule {
constructor(){
	register();
}

}