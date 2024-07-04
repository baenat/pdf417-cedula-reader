import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContentManagmentComponent } from './content-managment.component';

const routes: Routes = [
  {
    path: '',
    component: ContentManagmentComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagmentRoutingModule { }
