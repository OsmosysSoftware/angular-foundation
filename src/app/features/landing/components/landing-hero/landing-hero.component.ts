import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.scss'],
})
export default class LandingHeroComponent {
  constructor(public router: Router) {
    console.log('constructor logic here');
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
