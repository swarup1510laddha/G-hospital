import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap' ;
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatCardModule} from '@angular/material/card';
import { SignaturePadModule } from 'angular2-signaturepad';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PatientPortalComponent } from './patient/patient-portal/patient-portal.component';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      HomeComponent,
      AdminLoginComponent,
      PatientPortalComponent,
      AddPatientComponent
   ],
   imports: [
      FormsModule,
    ReactiveFormsModule,
      BrowserModule,
      NgbModule,
      MDBBootstrapModule.forRoot(),
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyB21pvtT4JzIQQWgG589xakVlglE6JdoKI'
       }),
      RouterModule.forRoot(appRoutes),
      MatCardModule,
      SignaturePadModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
