import { Component } from '@angular/core';
// import { utils, writeFileXLSX } from 'xlsx';

@Component({
  selector: 'app-generate-xlsx',
  templateUrl: './generate-xlsx.component.html',
  styleUrls: ['./generate-xlsx.component.scss']
})
export class GenerateXlsxComponent {
  generate() {
    import('xlsx').then(({ utils, writeFileXLSX }) => {
      const ws = utils.json_to_sheet([{firstName: 'Toto', lastName: 'Titi'}, {firstName: 'Tata', lastName: 'Tutu'}]);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      writeFileXLSX(wb, "SheetJSAngularAoO.xlsx");
    })

  }
}
