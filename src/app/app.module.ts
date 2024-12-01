import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// eslint-disable-next-line import/no-extraneous-dependencies
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import HttpLoaderFactory from 'src/assets/i18n/loader';
import { BrowserModule } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import AppComponent from './app.component';
import AppRoutingModule from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, MessageService],
  bootstrap: [AppComponent],
})
export default class AppModule {}
