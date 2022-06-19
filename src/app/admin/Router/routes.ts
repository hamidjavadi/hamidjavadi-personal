import { Routes } from '@angular/router';
import { AdminComponent } from '../admin.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

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
