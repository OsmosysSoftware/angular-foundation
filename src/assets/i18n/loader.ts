import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

const basePath = document.getElementsByTagName('base')[0].href;

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${basePath}assets/i18n/`, '.json');
}

export default HttpLoaderFactory;
