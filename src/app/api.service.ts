import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { Recipe } from './main/recipe/recipe';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) {
    this.http = http;
  }

getAllRecipes() {
    // const baseUrl = window.location.origin;
    // return this.http.get('http://localhost:3000/recipes')
    // Heroku below
    return this.http.get('/recipes')
        .pipe(mergeMap(res => of({success: true, value: res})),
        catchError(err => of({success: false, message: err}))
    );
}

getRecipes(type): Observable<any[]> {
    console.log('type', type);
    const selectedRecipes = [];
    // console.log('1', selectedRecipes);
    this.getAllRecipes()
    .subscribe((res: any) => {
        if (res.success) {
          res.value.forEach(recipe => {
            console.log(recipe.type, type)
            if (type === 'All') {
              selectedRecipes.push(recipe);
            } else if (recipe.type === type) {
              // selectedRecipes = [];
              selectedRecipes.push(recipe);
            }
          });
        }
    });
    console.log(selectedRecipes);
    return of(selectedRecipes);
}

}
