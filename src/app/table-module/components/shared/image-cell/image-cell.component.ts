import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-cell',
  templateUrl: './image-cell.component.html'
})
export class ImageCellComponent implements OnInit {
  @Input() columnValue!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
