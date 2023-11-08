import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
})
export default class LandingComponent {
  constructor(public router: Router) {
    console.log('constructor logic here');
  }
}
