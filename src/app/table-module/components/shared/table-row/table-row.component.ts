import { Component, Input, OnInit } from '@angular/core';
import { TableRow } from 'src/app/table-module/models/table.model';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
})
export class TableRowComponent implements OnInit {
  @Input() tableRow!: TableRow;

  constructor() {}

  ngOnInit(): void {}
}
