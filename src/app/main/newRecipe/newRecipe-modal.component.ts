import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-new-recipe-modal',
    templateUrl: './newRecipe-modal.component.html',
    styleUrls: ['./newRecipe-modal.component.css']
  })
export class NewRecipeModalComponent implements OnInit {
  constructor(
    private modalService: NgbModal) {}
    ngOnInit(): void {
    }


}
