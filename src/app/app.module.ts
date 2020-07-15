import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './login/login-modal.component';
import { RecipeCardComponent } from './main/recipeCard/recipeCard.component';
import { NewRecipeModalComponent } from './main/newRecipe/newRecipe-modal.component';
import { CategoriesComponent } from './main/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, LoginModalComponent, MainComponent, RecipeCardComponent,
    NewRecipeModalComponent, CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
