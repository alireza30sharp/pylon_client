import { AuthenticationService } from './../services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	constructor(private authService: AuthenticationService, private router: Router) {}

	async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

	getIdentityClaims() {
        console.log(this.authService.getIdentityClaims())
    }

    authorizationHeader() {
        console.log(this.authService.authorizationHeader())
    }
    hasValidIdToken() {
		console.log(this.authService.hasValidIdToken())

    }
	getAccessTokenExpiration(){
		console.log(this.authService.getAccessTokenExpiration())

	}
}