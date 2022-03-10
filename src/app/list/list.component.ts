import {Component, OnInit} from '@angular/core';
import {ListService} from "./list.service";
import {Observable, of} from "rxjs";
import {ListItem} from "./model/list-item";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listItems: Observable<ListItem[]> = of([]);

  constructor(private readonly listService: ListService) { }

  ngOnInit(): void {
    this.listItems = this.listService.getListItems()
  }

}
