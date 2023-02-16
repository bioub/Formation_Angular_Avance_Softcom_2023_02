import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { Ex3ListComponent } from './ex3/ex3-list/ex3-list.component';
import { Ex3ListItemComponent } from './ex3/ex3-list-item/ex3-list-item.component';
import { FormsModule } from '@angular/forms';
import { Ex4Component } from './ex4/ex4.component';
import { Ex5Component } from './ex5/ex5.component';
import { DoublePipe } from './double.pipe';
import { TriplePipe } from './triple.pipe';


@NgModule({
  declarations: [
    Ex1Component,
    Ex2Component,
    Ex3Component,
    Ex3ListComponent,
    Ex3ListItemComponent,
    Ex4Component,
    Ex5Component,
    DoublePipe,
    TriplePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExercicesRoutingModule
  ]
})
export class ExercicesModule { }
