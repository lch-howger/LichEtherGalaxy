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

const routes: Routes = [
  {path: '', component: PageMainComponent},
  {path: 'fleets', component: PageFleetsComponent},
  {path: 'ships', component: PageShipsComponent},
  {path: 'heroes', component: PageHeroesComponent},
  {path: 'battle', component: PageBattleComponent},
  {path: 'explore', component: PageExploreComponent},
  {path: 'home', component: PageHomeComponent},
  {path: 'detail/:index', component: PageDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
