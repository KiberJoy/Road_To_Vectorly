import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from 'src/app/table-module/models/table.model';

@Component({
  selector: 'app-table-header-row',
  templateUrl: './table-header-row.component.html',
})
export class TableHeaderRowComponent implements OnInit {
  @Input() tableRow!: TableRow;
  constructor() {}

  ngOnInit(): void {}
}
