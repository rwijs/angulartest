import {CategoryUtil} from "./category.util";
import {Category} from "../model/category";

describe('CategoryUtil', () => {
  describe('getCategoryName', () => {
    it('should translate Category to its string value', () => {
      expect(CategoryUtil.getCategoryName(Category.noot)).toBe('noot')
    });
  });
});
