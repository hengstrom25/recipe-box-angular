import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginModalComponent } from '../login/login-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
export class NavbarComponent {
  constructor(
    private modalService: NgbModal) {}


  openLogin() {
    const ngbModalOptions: NgbModalOptions = { size: 'sm' };
    let modal;
  //   if (missingFields) {
  //     ngbModalOptions.backdrop = 'static';
  //     ngbModalOptions.keyboard = false;
  //     modalRef = this.modalService.open(StateOptinModalComponent, ngbModalOptions)
  //     modalRef.componentInstance.missingFields = missingFields;
  //   } else {
    modal = this.modalService.open(LoginModalComponent, ngbModalOptions);
  //   }
  //   modalRef.componentInstance.circularButtonId = this.circularButtonId;
  }

}
