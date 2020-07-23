import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './login/login-modal.component';
import { RecipeCardComponent } from './main/recipe/recipeCard/recipeCard.component';
import { NewRecipeModalComponent } from './main/recipe/newRecipe/newRecipe-modal.component';
import { CategoriesComponent } from './main/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, LoginModalComponent, MainComponent, RecipeCardComponent,
    NewRecipeModalComponent, CategoriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    // DragDropModule
    // FlexLayoutModule
  ],
  providers: [],
  entryComponents: [LoginModalComponent, NewRecipeModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
