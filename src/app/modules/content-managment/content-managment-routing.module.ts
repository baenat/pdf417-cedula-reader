import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    // loadComponent: () => import('./../pages/home/home.component').then(c => c.HomeComponent)
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagmentRoutingModule { }
