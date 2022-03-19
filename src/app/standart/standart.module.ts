import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandartRoutingModule } from './standart-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { PromoComponent } from './pages/promo/promo.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    CoctelesComponent,
    PromoComponent
  ],
  imports: [
    CommonModule,
    StandartRoutingModule
  ]
})
export class StandartModule { }
