import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAdminRouting } from './Router/app-admin-routing.ts.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [DashboardComponent, AdminComponent, LoginComponent],
  imports: [CommonModule, AppAdminRouting, RouterModule],
})
export class AdminModule {}
