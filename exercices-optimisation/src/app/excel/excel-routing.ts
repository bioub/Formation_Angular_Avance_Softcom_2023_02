import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateXlsxComponent } from './generate-xlsx/generate-xlsx.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateXlsxComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExcelRoutingModule {}
