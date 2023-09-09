import { Component, OnInit, ViewChild } from '@angular/core';
import { INTRO_KEY } from 'src/app/guards/intro.guard';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { SwapperListModel } from 'src/app/share/components/swiper/model/swiper.model';

@Component({
	selector: 'app-intro',
	templateUrl: './intro.page.html',
	styleUrls: ['./intro.page.scss']
})
export class IntroPage implements OnInit {

	public catSlideOpts: any = {
		pagination: true,
		navigation: false,
		
		centeredSlides: true,
		grabCursor: true,
	}
	constructor(private router: Router) { }

	ngOnInit() { }

	next() {
	}

	async start() {
		await Preferences.set({ key: INTRO_KEY, value: 'true' });
		this.router.navigateByUrl('/login', { replaceUrl: true });
	}
}