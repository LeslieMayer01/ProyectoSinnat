import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './containers/inicio/inicio.component';
import { PanelAdmonComponent } from './containers/panel-admon/panel-admon.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'panelAdmin', component:PanelAdmonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
