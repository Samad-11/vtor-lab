import { Routes } from '@angular/router';
import { BattleComponent } from './pages/battle/battle.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'battle', component: BattleComponent },
    { path: "", pathMatch: "full", component: HomeComponent }
];
