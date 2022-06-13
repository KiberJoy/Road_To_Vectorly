import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageCellComponent } from './components/shared/image-cell/image-cell.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { TableCellComponent } from './components/shared/table-cell/table-cell.component';
import { TableComponent } from './components/table/table.component';
import { TableHeaderCellComponent } from './components/shared/table-header-cell/table-header-cell.component';
import { TableHeaderRowComponent } from './components/shared/table-header-row/table-header-row.component';
import { TableRowComponent } from './components/shared/table-row/table-row.component';
import { TextCellComponent } from './components/shared/text-cell/text-cell.component';

@NgModule({
  declarations: [
    ImageCellComponent,
    PaginationComponent,
    TableCellComponent,
    TableComponent,
    TableHeaderCellComponent,
    TableHeaderRowComponent,
    TableRowComponent,
    TextCellComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [TableComponent],
})
export class TableModule {}
