import { Component, Input, OnInit } from '@angular/core';
import { TableColumn } from 'src/app/table-module/models/table.model';

@Component({
  selector: 'app-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit {
  @Input() column!: TableColumn;

  constructor() {}

  ngOnInit(): void {}
}
