import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
	credentials!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService,
		private alertController: AlertController,
		private router: Router,
		private loadingController: LoadingController
	) { }

	ngOnInit() {
		this.credentials = this.fb.group({
			email: ['admin@example.com', [Validators.required, Validators.email]],
			password: ['123456', [Validators.required, Validators.minLength(5)]]
		});
	}

	async login() {
		const loading = await this.loadingController.create();
		await loading.present();

		this.authService.login(this.credentials.value).then(() => {
			loading.dismiss();
			this.router.navigateByUrl('/tabs', { replaceUrl: true });

		}).catch((error) => {

			loading.dismiss();
			this.showAlertController(error)

		});
	}

	// Easy access for form fields
	get email() {
		return this.credentials.get('email');
	}

	get password() {
		return this.credentials.get('password');
	}

	async showAlertController(err) {
		const alert = await this.alertController.create({
			header: 'Login failed',
			message: err,
			buttons: ['OK']
		});

		alert.present();
	}
}