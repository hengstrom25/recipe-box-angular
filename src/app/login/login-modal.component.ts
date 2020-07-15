import { Component, ViewEncapsulation, OnInit, OnDestroy, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./login-modal.component.css']
  })

  export class LoginModalComponent {
    constructor(
      private modalService: NgbModal) {}

    login() {
      console.log('click!');
    }

    dismiss(): void { this.modalService.dismissAll(); }

  }
