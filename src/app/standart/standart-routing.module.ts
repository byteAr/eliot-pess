import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CoctelesComponent } from './pages/cocteles/cocteles.component';
import { PromoComponent } from './pages/promo/promo.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path: '',
        component: HomeComponent,
        
      },
      {
        path: 'menu',
        component: MenuComponent,
        
      },
      {
        path: 'tragos',
        component: CoctelesComponent,
        
      },
      {
        path: 'promo',
        component: PromoComponent,
        
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StandartRoutingModule { }
