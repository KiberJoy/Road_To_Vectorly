import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from 'src/app/table-module/services/table.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  public pageIndex: number = 0;
  public itemsLimit$!: Observable<number>;
  public itemsLimits!: number[];
  public pages: void[] = [];
  constructor(private tableService: TableService) {}

  ngOnInit(): void {
    this.itemsLimits = this.tableService.getItemsLimits();
    this.itemsLimit$ = this.tableService.selectItemsLimit();
    this.tableService.selectPageIndex().subscribe((index) => {
      this.pageIndex = index;
    });
    this.tableService.selectPagesCount().subscribe((pagesCount) => {
      this.pages = new Array(pagesCount);
    });
  }

  public onLimitChange(itemsLimit: number): void {
    this.tableService.setItemsLimit(itemsLimit);
  }

  public onPageChange(pageIndex: number): void {
    this.tableService.setPageIndex(pageIndex);
  }
}
