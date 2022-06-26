import { Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SigninComponent } from '../components/signin/signin.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

const routes: Routes = [
  {
    path: 'admin-signin',
    component: SigninComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AdminAuthGuard],
      },
      {
        path: '**',
        redirectTo: '/admin',
      },
    ],
  },
];

export default routes;
