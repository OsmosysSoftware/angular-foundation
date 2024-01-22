import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export default class LandingComponent {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(public router: Router) {}
}
