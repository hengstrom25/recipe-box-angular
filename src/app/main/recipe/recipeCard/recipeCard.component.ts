import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { NewRecipeModalComponent } from '../newRecipe/newRecipe-modal.component';
import { ApiService } from '../../../api.service';
import { Recipe } from '../recipe';
// import { getRecipes } from '../../categories/categories.component';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipeCard.component.html',
    styleUrls: ['./recipeCard.component.css'],
    providers:  [ ApiService ]
  })
export class RecipeCardComponent implements OnInit {
    @Input() myRecipes: any;
    // myRecipes: any;
    recipes: Recipe[];
    category: string;
  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private apiService: ApiService) {
    this.http = http;
    }

    ngOnInit(): void {
        // console.log(this)
        // this.myRecipes = this.apiService.getRecipes('All');
        // this.findRecipes();
        // this.category = 'All';
        // getRecipes(type);
        // const recipes = getRecipes();
        // this.myRecipes = recipes;
        // getRecipes().then(result => {

        // })
        // console.log('my recipes', this.findRecipes())
        // this.host = 'http://localhost:3000';
        // this.getRecipes();
        // this.linkHtml = '<a href="https://www.bonappetit.com/recipe/new-new-bloody-mary" target="_blank">Click for Recipe</a>';
    }

    // getAllRecipes() {
    //     // const baseUrl = window.location.origin;
    //     return this.http.get('http://localhost:3000/recipes')
    //     // Heroku below
    //     // return this.http.get('/recipes')
    //         .pipe(mergeMap(res => of({success: true, value: res})),
    //         catchError(err => of({success: false, message: err}))
    //     );
    // }

    // getRecipes() {
    //     console.log('hey there');
    //     this.getAllRecipes()
    //     .subscribe((res: any) => {
    //         if (res.success) {
    //             this.myRecipes = res.value;
    //         }
    //     });
    // }

    findRecipes() {
        this.apiService.getRecipes(this.category)
        .subscribe(recipes => this.myRecipes = recipes);
    }

    addRecipe() {
        const modalRef = this.modalService.open(NewRecipeModalComponent);
        modalRef.componentInstance.name = 'New Recipe';
    }

    deleteRecipe(recipe) {
        console.log('delete was called', recipe);
        return this.http.delete<any>(`http://localhost:3000/recipes/${recipe.id}`)
        // Heroku
        // return this.http.delete<any>(`/recipes/${recipe.id}`)
        .pipe(mergeMap(res => of({success: true, value: res})),
        catchError(err => of({success: false, message: err}))
        );
    }

    delete(recipe) {
        this.deleteRecipe(recipe)
        .subscribe();
        // this.getRecipes();
    }

}

// export function getRecipes() {}
