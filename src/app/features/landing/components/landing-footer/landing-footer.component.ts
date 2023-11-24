import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/core/layout/service/app.layout.service';
import LanguageService from 'src/app/shared/services/language.service';
import LANGUAGES from '../../../../shared/constants/language.constants';
import ILanguage from '../../../../shared/models/shared.model';

@Component({
  selector: 'landing-footer',
  templateUrl: './landing-footer.component.html',
  styleUrls: ['./landing-footer.component.scss'],
})
export default class LandingFooterComponent implements OnInit {
  availableLanguages: ILanguage[] | undefined;

  selectedLanguage: ILanguage | undefined;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public layoutService: LayoutService,
    public router: Router,
    private languageService: LanguageService, // eslint-disable-next-line no-empty-function
  ) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.availableLanguages = LANGUAGES.AVAILABLE_LANGUAGES;
    this.selectedLanguage = this.languageService.getCurrentLanguage();
  }

  handleLanguageChange() {
    if (this.selectedLanguage) {
      this.languageService.setCurrentLanguage(this.selectedLanguage);
    }
  }
}
