import {Category} from "./category";

export class ListItem {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly category: Category
  ) {}
}
