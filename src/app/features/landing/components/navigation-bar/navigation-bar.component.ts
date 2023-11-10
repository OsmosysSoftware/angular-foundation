import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export default class NavigationBarComponent {
  constructor(
    private router: Router,
  ) {
    console.log('constructor logic here');
  }

  navigateToSection(sectionName: string) {
    this.router.navigate(['/'], { fragment: sectionName });
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
