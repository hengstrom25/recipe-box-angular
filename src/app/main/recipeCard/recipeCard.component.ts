import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { catchError, mergeMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipeCard.component.html',
    styleUrls: ['./recipeCard.component.css']
  })
export class RecipeCardComponent implements OnInit {
    myRecipes: any;
    host: string;
    linkHtml: string;
  constructor(
    private modalService: NgbModal,
    private http: HttpClient) {
    this.http = http;
    }

    ngOnInit(): void {
        // const self = this;

            // .then(result => JSON.parse(result.data))
            // .then(result => self.myRecipes = result);
        // this.myRecipes = [
        //     {
        //         id: 1,
        //         name: 'Bloody Mary',
        //         type: 'Beverages',
        //         link: '<a href="https://www.bonappetit.com/recipe/new-new-bloody-mary" target="_blank">Click for Recipe</a>',
        //         img: 'https://assets.bonappetit.com/photos/57aceb5af1c801a1038bc8fb/16:9/w_2560,c_limit/BLOODY-MARY-RESIZED-1-of-1.jpg',
        //         notes: 'Favorite Recipe!',
        //         userId: 1,
        //         categoryId: 2
        //     },
        //     {
        //         id: 2,
        //         name: 'Sicilian-Style Sauteed Greens Recipe',
        //         type: 'Vegetables',
        //         link: '<a href="https://www.seriouseats.com/recipes/2008/11/sicilian-style-sauteed-greens-recipe.html#recipe-wrapper" target="_blank">Click for Recipe</a>',
        //         img: 'data:image/jpeg;base64,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',
        //         notes: 'Super Yummy! Do not let Zachary add the salt',
        //         userId: 1,
        //         categoryId: 4
        //     }
        // ];
        // https://www.vegetariantimes.com/.image/t_share/MTQ1NjI0ODYwNzc2MjExNTA4/1211_30min_sicilianchard_med_0jpg.jpg
        console.log()
        this.host = 'http://localhost:3000';
        this.getRecipes();
        // this.linkHtml = '<a href="https://www.bonappetit.com/recipe/new-new-bloody-mary" target="_blank">Click for Recipe</a>';
    }

    getAllRecipes() {
        return this.http.get('/recipes')
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
}
