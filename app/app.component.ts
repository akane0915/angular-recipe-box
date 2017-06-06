import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Granny's Recipes</h1>
    <ul>
      <li *ngFor="let recipe of recipes" (click)="showRecipeDetails(recipe)"><span class="link">{{recipe.title}}</span><button (click)="editRecipe(recipe)">Edit Recipe</button>
        <div *ngIf="recipeToBeShown == recipe">
          <div *ngIf="recipeToBeShown">
            <h3>{{recipeToBeShown.title}}</h3>
            <p>Ingredients: {{recipeToBeShown.ingredients}}</p>
            <p>Directions: {{recipeToBeShown.directions}}</p>
            <br>
          </div>
        </div>
      </li>
    </ul>

    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <br>
      <h4>Edit Recipe</h4>
      <label>Recipe Title:</label>
      <input [(ngModel)]="selectedRecipe.title">
      <label>ingredients:</label>
      <input [(ngModel)]="selectedRecipe.ingredients">
      <label>Directions:</label>
      <input [(ngModel)]="selectedRecipe.directions">
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'Apples, sugar, butter, cinnamon, flour, water', 'Prep apples, prep crust, bake'),
    new Recipe('Liver and Onions', 'Liver, onions', 'cook them and then most likely toss it because it is inedible really'),
    new Recipe('Plastic Noodles', 'Beef, rice noodles, onions, peppers, tofu, sauce', 'cook it in a wok')
  ];

  selectedRecipe: Recipe = null;
  recipeToBeShown: Recipe = null;

  showRecipeDetails(recipe: Recipe) {
    this.recipeToBeShown = recipe;
  }

  editRecipe(clickedRecipe: Recipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
 }
