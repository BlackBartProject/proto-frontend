import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

// Themes
import Lara from '@primeuix/themes/lara/';


import { AppRoutingModule } from './app-routing-module';
import { provideHttpClient } from '@angular/common/http';

// Components
import { App } from './app';
import { Header } from './header/header';
import { Weather } from './weather/weather';
import { LandingPage } from './landing-page/landing-page';
import { Footer } from './footer/footer';


@NgModule({
  declarations: [
    App,
    Header,
    Weather,
    LandingPage,
    Footer
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    TooltipModule,
    ToastModule,
    RippleModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Lara
        }
    }),
    provideHttpClient(),
    MessageService
  ],
  bootstrap: [App]
})
export class AppModule { }
