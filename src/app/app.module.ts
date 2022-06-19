import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Routing
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';

// Custome Modules
import { AdminModule } from './admin/admin.module';
import { PublicModule } from './public/public.module';

// Firebase
import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AdminModule,
    PublicModule,
    RouterModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
