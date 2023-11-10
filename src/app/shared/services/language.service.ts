import { Injectable } from '@angular/core';
import ILanguage from 'src/app/features/landing/models/landing.model';
import { TranslateService } from '@ngx-translate/core';
import LANGUAGES from '../constants/language.constants';

@Injectable({
  providedIn: 'root',
})
export default class LanguageService {
  private currentApplicationLanguage: ILanguage;

  constructor(private translateService: TranslateService) {
    const storedLanguage = localStorage.getItem(LANGUAGES.CURRENT_APP_LANGUAGE);

    if (storedLanguage) {
      const storedLanguageValue = JSON.parse(storedLanguage);
      this.currentApplicationLanguage = storedLanguageValue;
      this.setCurrentLanguage(storedLanguageValue);
    } else {
      let defaultLanguage = LANGUAGES.AVAILABLE_LANGUAGES[0];
      const browserLanguage = navigator.language;
      const userLanguageCode = browserLanguage?.split('-')[0];
      const existingLanguageForUser = LANGUAGES.AVAILABLE_LANGUAGES.find((lang) => lang.code === userLanguageCode);

      if (existingLanguageForUser) {
        defaultLanguage = existingLanguageForUser;
      }

      this.currentApplicationLanguage = defaultLanguage;
      this.setCurrentLanguage(defaultLanguage);
    }
  }

  getCurrentLanguage(): ILanguage {
    return this.currentApplicationLanguage;
  }

  setCurrentLanguage(newLanguage: ILanguage): void {
    this.currentApplicationLanguage = newLanguage;
    localStorage.setItem(LANGUAGES.CURRENT_APP_LANGUAGE, JSON.stringify(newLanguage));
    this.translateService.use(newLanguage.code);
  }
}
