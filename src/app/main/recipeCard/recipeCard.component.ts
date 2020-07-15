import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipeCard.component.html',
    styleUrls: ['./recipeCard.component.css']
  })
export class RecipeCardComponent implements OnInit {
  constructor(
    private modalService: NgbModal) {}
    ngOnInit(): void {
    }


}
