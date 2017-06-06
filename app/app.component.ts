import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Granny's Recipes</h1>
    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}} <button class="btn" (click)="editRecipe(recipe)">Edit Recipe</button></li>
    </ul>

    <h4>Edit Recipe</h4>
    <label>Recipe Title:</label>
    <input [(ngModel)]="selectedRecipe.title">
    <label>ingredients:</label>
    <input [(ngModel)]="selectedRecipe.ingredients">
    <label>Directions:</label>
    <input [(ngModel)]="selectedRecipe.directions">
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'Apples, sugar, butter, cinnamon, flour, water', 'Prep apples, prep crust, bake'),
    new Recipe('Liver and Onions', 'Liver, onions', 'cook them and then most likely toss it because it is inedible really'),
    new Recipe('Plastic Noodles', 'Beef, rice noodles, onions, peppers, tofu, sauce', 'cook it in a wok')
  ];

  selectedRecipe: Recipe = this.recipes[0];

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
 }
