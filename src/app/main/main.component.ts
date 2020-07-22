import { Component, OnInit, OnDestroy } from '@angular/core';
import { NewRecipeModalComponent } from '../main/newRecipe/newRecipe-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
  })
export class MainComponent implements OnInit {
  constructor(
    private modalService: NgbModal) {}
    ngOnInit(): void {
    }

}
