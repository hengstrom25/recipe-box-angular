import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
// import { getRecipes } from '../recipeCard/recipeCard.component';
import { Recipe } from '../recipe';

@Component({
    selector: 'app-edit-recipe-modal',
    templateUrl: './editRecipe-modal.component.html',
    styleUrls: ['./editRecipe-modal.component.css'],
    exportAs: 'editRecipeForm'
  })
export class EditRecipeModalComponent implements OnInit {
  @Input() recipe: any;
  recipes: Recipe[];
  updatedRecipe: any;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Accept: 'text/plain, */*, application/json',
    }),
    responseType: 'text' as 'json'
  };
  constructor(
    private http: HttpClient,
    private modalService: NgbModal) {
    this.http = http;
    }
    model = this.recipe;
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
        console.log(this);
    }

    edit(recipe): Observable<Recipe> {
      // const recipe = this.model;
      console.log('recipe', recipe);
      return this.http.patch<any>(`http://localhost:3000/recipes/${recipe.id}`, recipe, this.httpOptions).pipe(
      // // Heroku below
      // return this.http.post<any>('/recipes', recipe, this.httpOptions).pipe(
      tap((updatedRecipe: Recipe) => console.log(`edited recipe ${updatedRecipe}`)),
      catchError(this.handleError));
    }

    save(recipe): void {
      this.recipe.name = recipe.name;
      this.recipe.type = recipe.type;
      this.recipe.link = recipe.link;
      this.recipe.notes = recipe.notes;
      this.recipe.img = recipe.img;
      this.edit(this.recipe)
        .subscribe((res: any) => {
          console.log('res', res);
          if (res) {
            this.dismiss();
          } else {
            console.log('nope');
          }
        });
    }

    private handleError(error: HttpErrorResponse) {
      console.log(error);
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
