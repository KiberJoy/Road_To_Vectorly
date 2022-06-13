import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from 'src/app/table-module/models/table.model';
import { TableService } from 'src/app/table-module/services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() tableTopicName!: string;
  public table$!: Observable<Table>;

  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.table$ = this.tableService.selectTable();
  }
}
