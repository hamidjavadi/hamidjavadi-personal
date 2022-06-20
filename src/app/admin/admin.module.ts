import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAdminRouting } from './Router/app-admin-routing.ts.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';
import { AuthGuardModule } from '@angular/fire/auth-guard';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    AppAdminRouting,
    RouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthGuardModule,
  ],
  providers: [],
})
export class AdminModule {}
