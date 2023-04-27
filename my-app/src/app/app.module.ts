import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContrasenaComponent } from './components/contrasena/contrasena.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { InicioComponent } from './containers/inicio/inicio.component';
import { PanelAdminComponent } from './components/panel-admin/panel-admin.component';
import { PanelAdmonComponent } from './containers/panel-admon/panel-admon.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    MenuComponent,
    ContrasenaComponent,
    FormularioComponent,
    InventarioComponent,
    AgregarComponent,
    InicioComponent,
    PanelAdminComponent,
    PanelAdmonComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
   // NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
