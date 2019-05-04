import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Salami Pizza',
      'Salammi',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg',
      [new Ingredient('Tomatoes', 2), new Ingredient('Salami', 8)]
    ),
    new Recipe(
      'Mushrooms Pizza',
      'Mushrooms',
      'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38014.jpg',
      [new Ingredient('Tomatoes', 1), new Ingredient('Mushrooms', 3)]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
