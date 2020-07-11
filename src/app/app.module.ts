import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './login/login-modal.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, LoginModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [LoginModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
