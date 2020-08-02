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
  newRecipe: any;
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     // Authorization: 'my-auth-token'
  //   })
  // };
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
      return this.http.post<any>('http://localhost:3000/recipes', recipe).pipe(
      // // Heroku below
      // return this.http.post<any>('/recipes', recipe).pipe(
      tap((newRecipe: Recipe) => console.log(`added recipe ${newRecipe}`)),
      catchError(this.handleError));
    }

    save(recipe): void {
      this.model.name = recipe.name;
      this.model.type = recipe.type;
      this.model.link = recipe.link;
      this.model.notes = recipe.notes;
      this.model.img = recipe.img;
      // console.log(this.model);
      this.add(this.model)
        .subscribe(res => {
          console.log('res', res);
          if (res) {
            this.dismiss();
          } else {
            console.log('nope');
          }
          // console.log(this.recipes);
          // this.recipes.push(recipe);
        });
    }

    private handleError(error: HttpErrorResponse) {
      console.log(error)
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
