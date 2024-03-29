import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase} from '@angular/fire/database';
import { environment } from '../environments/environment'; // Importa el entorno

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()), IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"realdatabase-9cdc9","appId":"1:1010662708722:web:239dd4a8b3cdd98a19876b","databaseURL":"https://realdatabase-9cdc9-default-rtdb.firebaseio.com","storageBucket":"realdatabase-9cdc9.appspot.com","apiKey":"AIzaSyAxiReY8V2fk9P1BbV0vK5E5spwJ9AGKkg","authDomain":"realdatabase-9cdc9.firebaseapp.com","messagingSenderId":"1010662708722"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
