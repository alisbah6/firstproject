import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Aloo ka Paratha', 'Decilious as always', 'https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_73,ar_16:9,w_560/v1/img/submissions/recipe/2000832843/Ty6HjraTQqXcqJfX6mNK_Aloo%2520paratha.jpg')
  ];

  constructor() { }

  ngOnInit():void {
  }
  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
