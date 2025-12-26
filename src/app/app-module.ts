import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { ButtonModule } from 'primeng/button';
import Aura from '@primeuix/themes/aura';
import Nora from '@primeuix/themes/nora';


import { AppRoutingModule } from './app-routing-module';
import { provideHttpClient } from '@angular/common/http';

import { App } from './app';
import { Header } from './header/header';
import { Weather } from './weather/weather';
import { LandingPage } from './landing-page/landing-page';


@NgModule({
  declarations: [
    App,
    Header,
    Weather,
    LandingPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: Nora
        }
    }),
    provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
