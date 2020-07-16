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
        this.host = 'http://localhost:3000';
        this.getRecipes();
        // this.linkHtml = '<a href="https://www.bonappetit.com/recipe/new-new-bloody-mary" target="_blank">Click for Recipe</a>';
    }

    getAllRecipes() {
        // const baseUrl = window.location.origin;
        return this.http.get('http://localhost:3000/recipes')
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
