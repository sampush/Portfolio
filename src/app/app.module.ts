import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { LemSectionComponent } from './lem-section/lem-section.component';
import { TopAbtComponent } from './top-abt/top-abt.component';
import { HomSectionComponent } from './hom-section/hom-section.component';
import { FooterComponent } from './footer/footer.component';
import { ConSectionComponent } from './con-section/con-section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    HeroSectionComponent,
    LemSectionComponent,
    TopAbtComponent,
    HomSectionComponent,
    FooterComponent,
    ConSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
