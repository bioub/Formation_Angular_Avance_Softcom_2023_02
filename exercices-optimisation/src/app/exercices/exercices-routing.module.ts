import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';

const routes: Routes = [
  {
    path: 'ex1',
    component: Ex1Component,
  },
  {
    path: 'ex2',
    component: Ex2Component,
  },
  {
    path: 'ex3',
    component: Ex3Component,
  },
  {
    path: 'ex4',
    component: Ex4Component,
  },
  {
    path: 'ex5',
    component: Ex5Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercicesRoutingModule {}
