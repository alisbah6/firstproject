import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { Dropdowndirective } from './shared/dropdown.directive';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { AppRoutingModule } from './app-routing module';
import { BreakfastrecipesComponent } from './breakfastrecipes/breakfastrecipes.component';
import { LunchrecipeComponent } from './lunchrecipe/lunchrecipe.component';
import { HomeComponent } from './home/home.component';
import { DessertsComponent } from './desserts/desserts.component';
import { FilterPipe } from './filter.pipe';
import { BreakfastvegComponent } from './breakfastveg/breakfastveg.component';
import { BreakfastnonvegComponent } from './breakfastnonveg/breakfastnonveg.component';
import { LunchvegComponent } from './lunchveg/lunchveg.component';
import { LunchnonvegComponent } from './lunchnonveg/lunchnonveg.component';
import { DinnervegComponent } from './dinnerveg/dinnerveg.component';
import { DinnernonvegComponent } from './dinnernonveg/dinnernonveg.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    Dropdowndirective,
    RecipesEditComponent,
    BreakfastrecipesComponent,
    LunchrecipeComponent,
    HomeComponent,
    DessertsComponent,
    FilterPipe,
    BreakfastvegComponent,
    BreakfastnonvegComponent,
    LunchvegComponent,
    LunchnonvegComponent,
    DinnervegComponent,
    DinnernonvegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
