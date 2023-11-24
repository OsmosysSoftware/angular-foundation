import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export default class NavigationBarComponent {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(private router: Router) {}

  navigateToSection(sectionName: string) {
    this.router.navigate(['/'], { fragment: sectionName });
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
