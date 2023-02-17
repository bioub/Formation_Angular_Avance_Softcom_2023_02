import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { CountdownComponent } from './countdown/countdown.component';

const routes: Routes = [
  {
    path: 'clock',
    component: ClockComponent,
  },
  {
    path: 'countdown',
    component: CountdownComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
