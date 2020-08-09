import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { getRecipes } from '../recipe/recipeCard/recipeCard.component';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ApiService } from '../../api.service';
import { Recipe } from '../recipe/recipe';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
  })
export class CategoriesComponent implements OnInit {
    recipesByType: any;
    recipes: any;
    categories: any;
  constructor(
    private apiService: ApiService,
    private http: HttpClient) {
    this.http = http;
  }
    ngOnInit(): void {
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
      this.getRecipesForCategory('All');
    }

    getRecipesForCategory(category) {
      this.apiService.getRecipes(category)
      .subscribe(recipes => this.recipes = recipes);
    }

}

