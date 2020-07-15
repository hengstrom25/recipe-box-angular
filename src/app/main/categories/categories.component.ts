import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
  })
export class CategoriesComponent implements OnInit {
    categories: any;
  constructor() {}
    ngOnInit(): void {
        this.categories = [
            'Breakfast',
            'Soups',
            'Salad',
            'Vegetables',
            'Main Dishes',
            'Bread',
            'Dessert',
            'Beverages',
            'Other',
            'All'
        ];
    }
}
