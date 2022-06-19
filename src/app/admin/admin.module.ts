import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppAdminRouting } from './Router/app-admin-routing.ts.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent, AdminComponent],
  imports: [CommonModule, AppAdminRouting, RouterModule],
})
export class AdminModule {}
