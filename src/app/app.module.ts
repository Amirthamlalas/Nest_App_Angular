import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddSecurityGuardComponent } from './add-security-guard/add-security-guard.component';

const myroute:Routes=[
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"addsecurity",
    component:AddSecurityGuardComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AddSecurityGuardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
