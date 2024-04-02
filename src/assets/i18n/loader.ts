import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

let basePath = '';
const baseElements = document.getElementsByTagName('base');

if (baseElements.length > 0 && baseElements[0].href) {
  basePath = baseElements[0].href;
} else {
  basePath = '../';
  // eslint-disable-next-line no-console
  console.error('No <base> tag found or missing href attribute.');
}

function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${basePath}assets/i18n/`, '.json');
}

export default HttpLoaderFactory;
