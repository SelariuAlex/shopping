import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg'
    ),
    new Recipe(
      'A Test',
      'Test',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg'
    )
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
