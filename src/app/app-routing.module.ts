import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { AsciiCipherComponent } from './ascii-cipher/ascii-cipher.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'clock', component: ClockComponent },
  { path: 'ascii', component: AsciiCipherComponent },
  { path: 'caesar', component: CaesarCipherComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
