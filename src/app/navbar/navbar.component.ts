import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginModalComponent } from '../login/login-modal.component';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
  })
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(
    private modalService: NgbModal) {}
    ngOnInit(): void {
      this.isLoggedIn = false;
    }


  openLogin() {
    const ngbModalOptions: NgbModalOptions = { size: 'sm' };
    let modal;
    modal = this.modalService.open(LoginModalComponent, ngbModalOptions);
  //   modalRef.componentInstance.circularButtonId = this.circularButtonId;
  }


}
