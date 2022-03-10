import { Injectable } from '@angular/core';
import {ListItem} from "./model/list-item";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getListItems(): Observable<ListItem[]> {
    const url = "/assets/list.content.json"
    return this.http.get<ListItem[]>(url);
  }
}
