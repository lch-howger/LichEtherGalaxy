import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageShipsComponent} from "./page-ships/page-ships.component";
import {PageHeroesComponent} from "./page-heroes/page-heroes.component";
import {PageBattleComponent} from "./page-battle/page-battle.component";

const routes: Routes = [
  {path: 'ships', component: PageShipsComponent},
  {path: 'heroes', component: PageHeroesComponent},
  {path: 'battle', component: PageBattleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
