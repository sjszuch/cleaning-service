import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SplashComponent } from './components/splash/splash.component';
import { HeroComponent } from './components/hero/hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ServicesComponent } from './components/services/services.component';
import { ClientsComponent } from './components/clients/clients.component';
import { Card1Component } from './components/card1/card1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SplashComponent,
    HeroComponent,
    ServicesComponent,
    ClientsComponent,
    Card1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
