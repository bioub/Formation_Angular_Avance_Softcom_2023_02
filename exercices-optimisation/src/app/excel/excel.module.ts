import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateXlsxComponent } from './generate-xlsx/generate-xlsx.component';
import { ExcelRoutingModule } from './excel-routing';



@NgModule({
  declarations: [
    GenerateXlsxComponent
  ],
  imports: [
    CommonModule,
    ExcelRoutingModule,
  ]
})
export class ExcelModule { }
