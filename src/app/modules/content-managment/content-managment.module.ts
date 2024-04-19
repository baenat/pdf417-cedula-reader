import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagmentRoutingModule } from './content-managment-routing.module';
import { ContentManagmentComponent } from './content-managment.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { HomeComponent } from '../pages/home/home.component';


@NgModule({
  declarations: [
    ContentManagmentComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ContentManagmentRoutingModule,
    ComponentsModule
  ]
})
export class ContentManagmentModule { }
