import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private slServie: ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Omlet',
            'Egg Omlet with Cheese',
            'http://img.taste.com.au/TP6Cmork/taste/2016/11/chinese-omelette-31745-1.jpeg',
            [new Ingredient('Eggs', 2), new Ingredient('Cheese', 1, ), new Ingredient('Onions', 1)]),
        new Recipe('French Fries', 'Salted Potato Fries',
            'https://cdn.potatopro.com/cdn/farfuture/JHyuloN9w_v4NBD7TkfmaZfWN6i49VrlsfspygR2J5Y/mtime:1495749506/sites/default/files/pictures/french-fries-1200.jpg',
            [new Ingredient('Potatoes', 3), new Ingredient('Salt', 1)])
    ];


    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slServie.addIngredients(ingredients);
    }


}