import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LeftNavMenuComponent } from './left-nav-menu/left-nav-menu.component';
import { PageShipsComponent } from './page-ships/page-ships.component';
import { PageHeroesComponent } from './page-heroes/page-heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavMenuComponent,
    PageShipsComponent,
    PageHeroesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
