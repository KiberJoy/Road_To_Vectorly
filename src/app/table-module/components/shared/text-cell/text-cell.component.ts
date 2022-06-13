import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-cell',
  templateUrl: './text-cell.component.html',
})
export class TextCellComponent implements OnInit {
  @Input() columnValue!: string;
  constructor() {}

  ngOnInit(): void {}
}
