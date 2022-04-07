import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearclienteComponent } from './components/user/crearcliente/crearcliente.component';
import { MostrarclienteComponent } from './components/user/mostrarcliente/mostrarcliente.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'user/listar',
    component: MostrarclienteComponent
  },
  {
    path: 'user/crear',
    component: CrearclienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
