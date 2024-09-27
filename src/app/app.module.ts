import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Empleadoscomponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { Empleado1Component } from './empleado1/empleado1.component';
import { Empleado2Component } from './empleado2/empleado2.component';

@NgModule({
  declarations: [
    AppComponent, Empleadoscomponent, EmpleadoComponent, Empleado1Component, Empleado2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
