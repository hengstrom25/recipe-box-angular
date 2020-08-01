import { Component, OnInit, OnDestroy } from '@angular/core';
import { of, Observable, throwError } from 'rxjs';
import { catchError, mergeMap, map, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

    save(recipe: Recipe): Observable<Recipe> {
      // const recipe = this.model;
      console.log('recipe', recipe);
      return this.http.post('http://localhost:3000/recipes', recipe)
      // // Heroku below
      // // return this.http.get('/recipes')
          // .pipe(mergeMap(res => {
          //   return of({ value: res, success: true });
          // }));
          // .pipe(catchError(err => console.log('err', err)))
          // .subscribe()
          // .pipe(
          //   map(res => {
          //     console.log('did something');
          //     return res;
          //   }),
          //   catchError(this.handleError)
          // );
          .pipe(map(res => res.json()));
          // .pipe(
          //   tap((newRecipe: Recipe) => console.log(`added ${newRecipe}`)),
          //   catchError(this.handleError)
          // );
      // );
    }

    addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
      );
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
