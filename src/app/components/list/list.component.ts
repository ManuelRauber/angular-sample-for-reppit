import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface ListItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() data: ListItem[] | null = null;
  @Output() itemClick = new EventEmitter<ListItem>();
}
