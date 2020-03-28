import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingComponent } from './loading/loading.component';
import { GamePageComponent } from './game-page/game-page.component';

const routes: Routes = [
  {path:'', component:LoadingComponent},
  {path:'game',component:GamePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
