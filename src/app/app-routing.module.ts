import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinDetailsComponent } from './coin-details/coin-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/coins', pathMatch: 'full' },
  { path: 'coins', component: CoinListComponent },
  { path: 'coins/:id', component: CoinDetailsComponent },
  { path: 'api/coins/years', redirectTo: '/coins' },
  { path: 'api/coins/countries', redirectTo: '/coins' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
