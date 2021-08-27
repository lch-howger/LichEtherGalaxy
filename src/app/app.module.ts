import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { LeftNavMenuComponent } from './left-nav-menu/left-nav-menu.component';
import { PageShipsComponent } from './page-ships/page-ships.component';
import { PageHeroesComponent } from './page-heroes/page-heroes.component';
import { PageBattleComponent } from './page-battle/page-battle.component';
import { PageMainComponent } from './page-main/page-main.component';
import { DivTestComponent } from './div-test/div-test.component';
import { PageFleetsComponent } from './page-fleets/page-fleets.component';
import {FormsModule} from "@angular/forms";
import { PageExploreComponent } from './page-explore/page-explore.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageBattleDetailComponent } from './page-battle-detail/page-battle-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavMenuComponent,
    PageShipsComponent,
    PageHeroesComponent,
    PageBattleComponent,
    PageMainComponent,
    DivTestComponent,
    PageFleetsComponent,
    PageExploreComponent,
    PageHomeComponent,
    PageDetailComponent,
    PageBattleDetailComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
