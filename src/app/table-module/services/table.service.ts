import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  MOCK_TABLE,
  Table,
  TableColumnTypes,
  TableRow,
} from '../models/table.model';

const ITEMS_LIMITS: number[] = [2, 3, 4, 5];
const DEFAULT_SORT_ORDER: number = 1;
const DEFAULT_SORT_TYPE: TableColumnTypes = TableColumnTypes.flag;

@Injectable({
  providedIn: 'root',
})
export class TableService {
  private itemsLimit: number = ITEMS_LIMITS[0];
  private itemsLimit$ = new BehaviorSubject<number>(this.itemsLimit);
  private pagesCount$ = new BehaviorSubject<number>(0);
  private pageIndex: number = 0;
  private pageIndex$ = new BehaviorSubject<number>(this.pageIndex);
  private sortOrder: number = DEFAULT_SORT_ORDER;
  private sortOrder$ = new BehaviorSubject<number>(this.sortOrder);
  private sortType: TableColumnTypes = DEFAULT_SORT_TYPE;
  private sortType$ = new BehaviorSubject<TableColumnTypes>(this.sortType);
  private table: Table = this.getCopy(MOCK_TABLE);
  private table$ = new BehaviorSubject<Table>(this.table);

  public getItemsLimits(): number[] {
    return ITEMS_LIMITS;
  }

  public selectItemsLimit(): Observable<number> {
    return this.itemsLimit$.asObservable();
  }

  public selectPagesCount(): Observable<number> {
    return this.pagesCount$.asObservable();
  }

  public setPageIndex(index: number): void {
    this.pageIndex = index;
    this.pageIndex$.next(index);
    this.recalculate();
  }

  public setItemsLimit(limit: number): void {
    this.itemsLimit = limit;
    this.itemsLimit$.next(limit);
    this.setPageIndex(0);
    // this.recalculate();
  }

  public selectPageIndex(): Observable<number> {
    return this.pageIndex$.asObservable();
  }

  private setSortOrder(order: number): void {
    this.sortOrder = order;
    this.sortOrder$.next(order);
  }

  public selectSortOrder(): Observable<number> {
    return this.sortOrder$.asObservable();
  }

  public setSortType(type: TableColumnTypes): void {
    const sortOrder = this.sortType === type ? -this.sortOrder : 1;
    this.sortType = type;
    this.sortType$.next(type);
    this.setSortOrder(sortOrder);
    this.recalculate();
  }

  public selectSortType(): Observable<TableColumnTypes> {
    return this.sortType$.asObservable();
  }

  private setTable(table: Table): void {
    this.table = table;
    this.table$.next(table);
  }

  public selectTable(): Observable<Table> {
    return this.table$.asObservable();
  }

  private recalculate(): void {
    const pagesCount = Math.ceil(MOCK_TABLE.body.rows.length / this.itemsLimit);
    this.pagesCount$.next(pagesCount);
    this.setTable(
      this.getSlicedTable(this.getSortedTable(this.getCopy<Table>(MOCK_TABLE)))
    );
  }

  private getSortedTable(table: Table): Table {
    table.body.rows.sort((rowA: TableRow, rowB: TableRow) => {
      const valueA = rowA.columns
        .find((column) => column.type === this.sortType)
        ?.value.toLowerCase();
      const valueB = rowB.columns
        .find((column) => column.type === this.sortType)
        ?.value.toLowerCase();
      if (valueA < valueB) {
        return -1 * this.sortOrder;
      } else if (valueA > valueB) {
        return 1 * this.sortOrder;
      } else {
        return 0;
      }
    });
    return table;
  }

  private getSlicedTable(table: Table): Table {
    const startSlice = this.pageIndex * this.itemsLimit;
    table.body.rows = table.body.rows.splice(startSlice, this.itemsLimit);
    return table;
  }

  private getCopy<A>(object: A): A {
    return JSON.parse(JSON.stringify(object));
  }

  constructor() {
    this.recalculate();
  }
}
