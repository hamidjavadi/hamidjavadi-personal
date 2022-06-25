import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Custome Modules
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';

// Firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AdminModule,
    BrowserAnimationsModule,
    BrowserModule,
    PublicModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
