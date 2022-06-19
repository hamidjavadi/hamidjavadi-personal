import { Routes } from '@angular/router';
import { AdminComponent } from '../pages/admin/admin.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: '**',
        redirectTo: '/admin',
      },
    ],
  },
];

export default routes;
