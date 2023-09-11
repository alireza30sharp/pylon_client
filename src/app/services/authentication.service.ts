import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, switchMap, filter } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { Preferences } from '@capacitor/preferences';
import { OAuthService } from 'angular-oauth2-oidc';
import { authPasswordFlowConfig } from './auth-password-flow.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';

const TOKEN_KEY = 'my-token';

@Injectable({
	providedIn: 'root'
})
export class AuthenticationService {
	// Init with null to filter out the first value in a guard!
	isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
	userProfileSubject$ = new Subject<any>();
	token = '';
	userProfile: object;
	constructor(private http: HttpClient, private oauthService: OAuthService) {
		//	this.loadToken();
		this.oauthService.tokenValidationHandler = new JwksValidationHandler();
		this.oauthService.configure(authPasswordFlowConfig);
		//this.oauthService.tryLogin();
		this.oauthService.events
			.pipe(filter(e => ["token_received"].includes(e.type)))
			.subscribe(e => {

				this.isAuthenticated.next(true);

				this.oauthService.loadUserProfile().then((userProfile) => {

					console.table(userProfile);
					this.userProfileSubject$.next(userProfile)
				});

			});

		this.oauthService.events
			.pipe(filter(e => ["token_expires"].includes(e.type)))
			.subscribe(e => {

				console.debug(e + 'Your session has been terminated!');

			});

	}

	async loadToken() {

	}

	loadUserProfile(): void {
		this.oauthService.loadUserProfile().then((up) => (this.userProfile = up));
	}
	login(credentials: { email: any; password: any }): Promise<any> {

		return this.oauthService
			.fetchTokenUsingPasswordFlow(
				credentials.email,
				credentials.password

			)
			.then(() => {
				//	this.silentRefresh()
				return from([true]);
			})
			.catch((err) => {
				return from(err);

			});
		// return this.http.post(`https://reqres.in/api/login`, credentials).pipe(
		// 	map((data: any) => data.token),
		// 	switchMap((token) => {
		// 		return from(Preferences.set({ key: TOKEN_KEY, value: token }));
		// 	}),
		// 	tap((_) => {
		// 		this.isAuthenticated.next(true);
		// 	})
		// );
	}

	logout() {
		this.isAuthenticated.next(false);
		this.oauthService.logOut()
	}

	getIdentityClaims() {
		return this.oauthService.getIdentityClaims()
	}
	silentRefresh() {
		this.oauthService.refreshToken();
	}
	authorizationHeader() {
		return this.oauthService.authorizationHeader()
	}
	hasValidIdToken() {
		return this.oauthService.hasValidAccessToken()
	}
	getAccessTokenExpiration() {
		return this.oauthService.getAccessTokenExpiration()
	}

}