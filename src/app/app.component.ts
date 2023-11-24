import { Component, OnInit } from '@angular/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TranslateService } from '@ngx-translate/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { PrimeNGConfig } from 'primeng/api';
import LanguageService from './shared/services/language.service';
import LANGUAGES from './shared/constants/language.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export default class AppComponent implements OnInit {
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  constructor(
    private primengConfig: PrimeNGConfig,
    private translateService: TranslateService,
    private languageService: LanguageService,
  ) {}

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
