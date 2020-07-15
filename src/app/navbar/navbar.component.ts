import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LoginModalComponent } from '../login/login-modal.component';
import { NgbModal, NgbActiveModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}

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
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.name = 'Login';
  }


}
