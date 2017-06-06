import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Granny's Recipes</h1>
    <ul>
      <li *ngFor="let recipe of recipes">{{recipe.title}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Apple Pie', 'Apples, sugar, butter, cinnamon, flour, water', 'Prep apples, prep crust, bake'),
    new Recipe('Liver and Onions', 'Liver, onions', 'cook them and then most likely toss it because it is inedible really'),
  ];
}

export class Recipe {
  constructor(public title: string, public ingredients: string, public directions: string) {}
 }
