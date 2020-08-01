import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { Recipe } from '../recipe';

@Component({
    selector: 'app-new-recipe-modal',
    templateUrl: './newRecipe-modal.component.html',
    styleUrls: ['./newRecipe-modal.component.css'],
    exportAs: 'newRecipeForm'
  })
export class NewRecipeModalComponent implements OnInit {
  recipes: Recipe[];
  httpOptions = {
    headers: {'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST'}
  };
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

    add(recipe: Recipe): Observable<Recipe> {
      // const recipe = this.model;
      console.log('recipe', recipe);
      return this.http.post<Recipe>('http://localhost:3000/recipes', recipe, this.httpOptions).pipe(
      // // Heroku below
      // // return this.http.get('/recipes')
      tap((newRecipe: Recipe) => console.log(`added recipe ${newRecipe}`)),
      catchError(this.handleError));
    }

    save(name: string, type: string, link: string, notes: string, img: string): void {
      this.add({ name, type, link, notes, img } as Recipe)
        .subscribe(recipe => {
          this.recipes.push(recipe);
        });
    }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }

    dismiss(): void { this.modalService.dismissAll(); }


}
