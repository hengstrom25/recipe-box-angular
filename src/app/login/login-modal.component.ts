import { Component, ViewEncapsulation, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login-modal.component.css']
  })

  export class LoginModalComponent {
    @Input() name;
    constructor(
      public activeModal: NgbActiveModal,
      private modalService: NgbModal) {}

    login() {
      console.log('click!');
    }

    dismiss(): void { this.modalService.dismissAll(); }

  }
