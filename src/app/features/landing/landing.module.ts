import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import LandingComponent from './landing.component';
import LandingRoutingModule from './landing-routing.module';
import NavigationBarComponent from './components/navigation-bar/navigation-bar.component';
import LandingHeroComponent from './components/landing-hero/landing-hero.component';
import LandingFooterComponent from './components/landing-footer/landing-footer.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule,
    DividerModule,
    StyleClassModule,
    ChartModule,
    PanelModule,
    ButtonModule,
  ],
  declarations: [
    LandingComponent,
    NavigationBarComponent,
    LandingHeroComponent,
    LandingFooterComponent,
  ],
})
export default class LandingModule {}
