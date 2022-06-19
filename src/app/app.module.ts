import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
// import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './Router/app-routing.module';
import routes from './Router/routes';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import routes from './Router/routes';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
