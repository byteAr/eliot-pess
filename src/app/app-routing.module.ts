import { NgModule } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
    {
        path: '',
        loadChildren: () => import('./standart/standart.module').then(m => m.StandartModule)
    },   
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )
    },
    
    {
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }