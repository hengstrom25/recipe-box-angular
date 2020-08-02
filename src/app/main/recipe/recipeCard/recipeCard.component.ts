import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NewRecipeModalComponent } from '../newRecipe/newRecipe-modal.component';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipeCard.component.html',
    styleUrls: ['./recipeCard.component.css']
  })
export class RecipeCardComponent implements OnInit {
    myRecipes: any;
    // host: string;
    // linkHtml: string;
  constructor(
    private http: HttpClient,
    private modalService: NgbModal) {
    this.http = http;
    }

    ngOnInit(): void {
        // this.host = 'http://localhost:3000';
        this.getRecipes();
        // this.linkHtml = '<a href="https://www.bonappetit.com/recipe/new-new-bloody-mary" target="_blank">Click for Recipe</a>';
    }

    getAllRecipes() {
        // const baseUrl = window.location.origin;
        return this.http.get('http://localhost:3000/recipes')
        // Heroku below
        // return this.http.get('/recipes')
            .pipe(mergeMap(res => of({success: true, value: res})),
            catchError(err => of({success: false, message: err}))
        );
    }

    getRecipes() {
        this.getAllRecipes()
        .subscribe((res: any) => {
            if (res.success) {
                this.myRecipes = res.value;
            }
        });
    }

    addRecipe() {
        const modalRef = this.modalService.open(NewRecipeModalComponent);
        modalRef.componentInstance.name = 'New Recipe';
    }

    delete(recipe) {
        console.log('delete was called');
        return this.http.delete(`http://localhost:3000/recipes/${recipe.id}`)
        .pipe(mergeMap(res => of({success: true, value: res})),
        catchError(err => of({success: false, message: err}))
        );
    }
}
