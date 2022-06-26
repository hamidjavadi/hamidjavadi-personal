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

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminSidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    ProfileComponent,
    SigninComponent,
    NavbarComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule,
    AppAdminRouting,
    RouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthGuardModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
})
export class AdminModule {}
