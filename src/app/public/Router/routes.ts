import { Routes } from '@angular/router';
import { IndexComponent } from '../components/index/index.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';

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
