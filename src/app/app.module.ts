import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopNavBarComponent} from './top-nav-bar/top-nav-bar.component';
import {LeftNavMenuComponent} from './left-nav-menu/left-nav-menu.component';
import {PageShipsComponent} from './page-ships/page-ships.component';
import {PageHeroesComponent} from './page-heroes/page-heroes.component';
import {PageBattleComponent} from './page-battle/page-battle.component';
import {PageMainComponent} from './page-main/page-main.component';
import {DivTestComponent} from './div-test/div-test.component';
import {PageFleetsComponent} from './page-fleets/page-fleets.component';
import {FormsModule} from "@angular/forms";
import {PageExploreComponent} from './page-explore/page-explore.component';
import {PageHomeComponent} from './page-home/page-home.component';
import {PageDetailComponent} from './page-detail/page-detail.component';
import {PageBattleDetailComponent} from './page-battle-detail/page-battle-detail.component';
import {PageWelcomeComponent} from './page-welcome/page-welcome.component';
import {PageRankingComponent} from './page-ranking/page-ranking.component';
import {PageMarketComponent} from './page-market/page-market.component';
import {PageAdventureComponent} from './page-adventure/page-adventure.component';
import {PageStakingComponent} from './page-staking/page-staking.component';
import {TabBaseComponent} from './tab-base/tab-base.component';
import {TabFleetsComponent} from './tab-fleets/tab-fleets.component';
import {TabCreateComponent} from './tab-create/tab-create.component';
import {TabStakingComponent} from './tab-staking/tab-staking.component';
import {TabMarketComponent} from './tab-market/tab-market.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    PageBattleDetailComponent,
    PageWelcomeComponent,
    PageRankingComponent,
    PageMarketComponent,
    PageAdventureComponent,
    PageStakingComponent,
    TabBaseComponent,
    TabFleetsComponent,
    TabCreateComponent,
    TabStakingComponent,
    TabMarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
