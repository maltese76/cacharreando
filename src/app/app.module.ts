import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NuevoComponenteComponent } from './nuevo-componente/nuevo-componente.component';
import { PatheoComponent } from './patheo/patheo.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevoComponenteComponent,
    PatheoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
