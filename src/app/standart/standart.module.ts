import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule
  ]
})
export class StandartModule { }
