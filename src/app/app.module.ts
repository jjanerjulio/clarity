import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarclienteComponent } from './components/user/mostrarcliente/mostrarcliente.component';
import { CrearclienteComponent } from './components/user/crearcliente/crearcliente.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarclienteComponent,
    CrearclienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
