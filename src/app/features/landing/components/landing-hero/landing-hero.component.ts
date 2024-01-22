import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-hero',
  templateUrl: './landing-hero.component.html',
  styleUrls: ['./landing-hero.component.scss'],
})
export default class LandingHeroComponent {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(public router: Router) {}

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
