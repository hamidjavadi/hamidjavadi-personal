import { Routes } from '@angular/router';
import { IndexComponent } from '../pages/index/index.component';
import { NotFoundComponent } from '../pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export default routes;
