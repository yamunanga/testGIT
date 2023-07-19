import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MontyHallViewComponent } from './Views/monty-hall-view/monty-hall-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/simulate', pathMatch: 'full' },
  {
    path:'simulate',component:MontyHallViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
