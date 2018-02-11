import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Rosemary Salmon', 'This is a test recipe', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('Roadside Chicken', 'This is a test recipe', 'https://static01.nyt.com/images/2017/06/07/dining/07INDIAjp7/07INDIAjp7-articleLarge.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
