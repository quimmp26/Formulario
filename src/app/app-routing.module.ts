import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'componente1'
  },
  {
    path: 'componente1', component: Componente1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
