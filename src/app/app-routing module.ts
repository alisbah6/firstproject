import {NgModule} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import { BreakfastnonvegComponent } from './breakfastnonveg/breakfastnonveg.component';
import { BreakfastrecipesComponent } from './breakfastrecipes/breakfastrecipes.component';
import { BreakfastvegComponent } from './breakfastveg/breakfastveg.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DinnernonvegComponent } from './dinnernonveg/dinnernonveg.component';
import { DinnervegComponent } from './dinnerveg/dinnerveg.component';
import { HomeComponent } from './home/home.component';
import { LunchnonvegComponent } from './lunchnonveg/lunchnonveg.component';
import { LunchrecipeComponent } from './lunchrecipe/lunchrecipe.component';
import { LunchvegComponent } from './lunchveg/lunchveg.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { RecipesComponent } from './recipes/recipes.component';
const appRoutes : Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent},
{ path: 'dinner', component: RecipesComponent},
{path:'recipeedit',component:RecipesEditComponent},
{path:'breakfastrecipe',component:BreakfastrecipesComponent},
{path:'lunchrecipe',component:LunchrecipeComponent},
{path:'desserts',component:DessertsComponent},
{path:'breakfastvegetarian', component:BreakfastvegComponent},
{path:'breakfastnonvegetarian', component:BreakfastnonvegComponent},
{path:'lunchvegetarian', component:LunchvegComponent},
{path:'lunchnonvegetarian', component:LunchnonvegComponent},
{path:'dinnervegetarian', component:DinnervegComponent},
{path:'dinnernonvegetarian', component:DinnernonvegComponent},

];
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports:[RouterModule]

})
export class AppRoutingModule{

}
