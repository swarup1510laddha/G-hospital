import { Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { PatientPortalComponent } from './patient/patient-portal/patient-portal.component';

export const appRoutes: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: '', component: HomeComponent},
    {path: 'Admin-Login', component: AdminLoginComponent},
    {path: 'Patient-Portal', component: PatientPortalComponent}
];
