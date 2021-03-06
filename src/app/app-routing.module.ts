import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageShipsComponent} from "./page-ships/page-ships.component";
import {PageHeroesComponent} from "./page-heroes/page-heroes.component";
import {PageBattleComponent} from "./page-battle/page-battle.component";
import {PageMainComponent} from "./page-main/page-main.component";
import {PageFleetsComponent} from "./page-fleets/page-fleets.component";
import {PageExploreComponent} from "./page-explore/page-explore.component";
import {PageHomeComponent} from "./page-home/page-home.component";
import {PageDetailComponent} from "./page-detail/page-detail.component";
import {PageBattleDetailComponent} from "./page-battle-detail/page-battle-detail.component";
import {PageMarketComponent} from "./page-market/page-market.component";
import {PageAdventureComponent} from "./page-adventure/page-adventure.component";
import {PageStakingComponent} from "./page-staking/page-staking.component";

const routes: Routes = [
  {path: '', component: PageMainComponent},
  {path: 'fleets', component: PageFleetsComponent},
  {path: 'ships', component: PageShipsComponent},
  {path: 'heroes', component: PageHeroesComponent},
  {path: 'battle', component: PageBattleComponent},
  {path: 'explore', component: PageExploreComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'market', component: PageMarketComponent},
  {path: 'adventure', component: PageAdventureComponent},
  {path: 'staking', component: PageStakingComponent},
  {path: 'detail/:index', component: PageDetailComponent},
  {path: 'battle-detail/:index', component: PageBattleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
