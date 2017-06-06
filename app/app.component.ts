import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Granny's Recipes</h1>
    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}} <button class="btn" (click)="editRecipe(recipe)">Edit Recipe</button></li>
    </ul>

    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <p>Ingredients: {{selectedRecipe.ingredients}}</p>
      <p>Directions: {{selectedRecipe.directions}}</p>
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

  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
 }
