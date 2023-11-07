import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/layout/service/app.layout.service';

@Component({
  selector: 'landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
})
export default class LandingFooterComponent {
  constructor(
    public layoutService: LayoutService,
    public router: Router,
  ) {
    console.log('constructor logic here');
  }
}
