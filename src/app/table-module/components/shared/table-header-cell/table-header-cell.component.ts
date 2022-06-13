import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TableColumn,
  TableColumnTypes,
} from 'src/app/table-module/models/table.model';
import { TableService } from 'src/app/table-module/services/table.service';

@Component({
  selector: 'app-table-header-cell',
  templateUrl: './table-header-cell.component.html',
})
export class TableHeaderCellComponent implements OnInit {
  @Input() column!: TableColumn;
  public sortType$!: Observable<TableColumnTypes>;
  public sortOrder$!: Observable<number>;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.sortType$ = this.tableService.selectSortType();
    this.sortOrder$ = this.tableService.selectSortOrder();
  }

  public sort(type: TableColumnTypes) {
    this.tableService.setSortType(type);
  }
}
