import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Recipe } from '../recipe';

@Component({
    selector: 'app-new-recipe-modal',
    templateUrl: './newRecipe-modal.component.html',
    styleUrls: ['./newRecipe-modal.component.css'],
    exportAs: 'newRecipeForm'
  })
export class NewRecipeModalComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private modalService: NgbModal) {
    this.http = http;
    }
    model = new Recipe('', '', '', '', '');
    categories = [
      'Breakfast',
      'Soups',
      'Salad',
      'Vegetables',
      'Main Dishes',
      'Bread',
      'Dessert',
      'Beverages',
      'Other'
    ];
    ngOnInit(): void {
    }

    save(recipe) {
      recipe = this.model;
      console.log('recipe', recipe);
      return this.http.post<any>('http://localhost:3000/recipes', recipe);
      // // Heroku below
      // // return this.http.get('/recipes')
          // .pipe(mergeMap(res => of({success: true, value: res})),
          // catchError(err => of({success: false, message: err}))
      // );
    }

    dismiss(): void { this.modalService.dismissAll(); }


}
