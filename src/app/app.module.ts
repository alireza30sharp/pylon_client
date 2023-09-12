import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OAuthModule, OAuthStorage, ValidationHandler } from 'angular-oauth2-oidc';
import { JwksValidationHandler, } from 'angular-oauth2-oidc-jwks';

import { HttpClientModule } from '@angular/common/http';
import { register } from 'swiper/element/bundle';
export function storageFactory(): OAuthStorage {
	return localStorage
}
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule, IonicModule.forRoot(),
		AppRoutingModule, HttpClientModule,
		OAuthModule.forRoot({
			resourceServer: {
				sendAccessToken: true,
				//allowedUrls: ["https://localhost:7000"]
			}
		})
	],
	providers: [
		{ provide: ValidationHandler, useClass: JwksValidationHandler },
		//{ provide: OAuthStorage, useFactory: storageFactory },
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		register();
	}

}