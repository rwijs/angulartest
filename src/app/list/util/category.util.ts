import {Category} from "../model/category";

export class CategoryUtil {
  /**
   * return CategoryName from its id
   */
  static getCategoryName(categoryId: number): string {
    return Category[categoryId];
  }
}
