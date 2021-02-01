import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Shnitzel',
      imageUrl: 'https://dannwoellertthefoodetymologist.files.wordpress.com/2015/10/schnitzel-7_edited.jpg',
      ingredients: ['French Fries', 'Pork meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Sphagetti',
      imageUrl: 'https://th.bing.com/th/id/OIP.naIWBopmiX5J_2qEkJsotgHaE8?pid=Api&rs=1https://th.bing.com/th/id/OIP.naIWBopmiX5J_2qEkJsotgHaE8?pid=Api&rs=1',
      ingredients: ['Pasta', 'Meat', 'Salad', 'Tomatoes']
    }

  ]; 

  constructor() { }

  //getting all recipes
  getAllRecipes(){
    return [...this.recipes];
  }

  //getting a recipe equal to the id  
  getRecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
    })};
  }

  //deleting recipe
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
