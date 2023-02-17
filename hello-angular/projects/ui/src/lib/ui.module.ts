import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select/select.component';
import { UiComponent } from './ui.component';



@NgModule({
  declarations: [
    UiComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UiComponent,
    SelectComponent,
  ]
})
export class UiModule { }
