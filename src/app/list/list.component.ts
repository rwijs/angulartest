import {Component, OnInit} from '@angular/core';
import {ListService} from "./list.service";
import {Observable, of} from "rxjs";
import {ListItem} from "./model/list-item";
import {CategoryUtil} from "./util/category.util";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  readonly categoryUtil = CategoryUtil

  listItems: Observable<ListItem[]> = of([]);

  constructor(private readonly listService: ListService) { }

  ngOnInit(): void {
    this.listItems = this.listService.getListItems()
  }

}
