// Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Routing
import { AppAdminRouting } from './Router/app-admin-routing.ts.module';
import { RouterModule } from '@angular/router';

// Firebase
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthGuardModule } from '@angular/fire/auth-guard';

// Custom components
import { AdminComponent } from './admin.component';
import { AdminSidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninComponent } from './components/signin/signin.component';

// Material components
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    AppAdminRouting,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AuthGuardModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
  ],
  providers: [],
})
export class AdminModule {}
