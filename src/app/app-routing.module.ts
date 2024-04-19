import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content',
    loadChildren: () => import('./modules/content-managment/content-managment.module').then(m => m.ContentManagmentModule)
  },
  {
    path: '**',
    redirectTo: 'content',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
