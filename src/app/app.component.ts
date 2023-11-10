import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PrimeNGConfig } from 'primeng/api';
import LanguageService from './shared/services/language.service';
import LANGUAGES from './shared/constants/language.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export default class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, private translateService: TranslateService, private languageService: LanguageService) {
    console.log('constructor logic');
  }

  ngOnInit() {
    this.initializePrimeNgConfigs();
    this.initializeAppLanguage();
  }

  initializePrimeNgConfigs() {
    this.primengConfig.ripple = true;
  }

  initializeAppLanguage() {
    this.translateService.setDefaultLang(LANGUAGES.ENGLISH);
    const currentLanguage = this.languageService.getCurrentLanguage();
    this.translateService.use(currentLanguage.code || LANGUAGES.ENGLISH);
  }
}
