import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export default class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {
    console.log('constructor logic');
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
