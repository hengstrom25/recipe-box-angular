import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { getRecipes } from '../recipe/recipeCard/recipeCard.component';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
  })
export class CategoriesComponent implements OnInit {
    recipesByType: any;
    categories: any;
  constructor(
    private http: HttpClient) {
    this.http = http;
  }
    ngOnInit(): void {
      // this.getRecipes('All');
      this.categories = [
          'Breakfast',
          'Soups',
          'Salad',
          'Vegetables',
          'Main Dishes',
          'Bread',
          'Dessert',
          'Beverages',
          'Other',
          'All'
      ];
    }

    // getRecipesForCategory(category) {
    //   let recipes = this.getRecipes();
    //   console.log('recipes', recipes)
    // }

  getAllRecipes() {
      // const baseUrl = window.location.origin;
      return this.http.get('http://localhost:3000/recipes')
      // Heroku below
      // return this.http.get('/recipes')
          .pipe(mergeMap(res => of({success: true, value: res})),
          catchError(err => of({success: false, message: err}))
      );
  }

  getRecipes(type) {
      console.log('type', type)
      const selectedRecipes = [];
      this.getAllRecipes()
      .subscribe((res: any) => {
          if (res.success) {
            res.value.forEach(recipe => {
              if (type === 'All') {
                selectedRecipes.push(recipe);
              } else if (recipe.type === type) {
                selectedRecipes.push(recipe);
              }
            });
          }
      });
      console.log(selectedRecipes)
      return selectedRecipes;
  }
}

export function getRecipes() {}
