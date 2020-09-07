import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { AsciiCipherComponent } from './ascii-cipher/ascii-cipher.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import {Title} from "@angular/platform-browser";
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    CaesarCipherComponent,
    AsciiCipherComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
