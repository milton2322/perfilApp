import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import {UsuarioComponent } from './usuario/usuario.component';
import { RolComponent } from './rol/rol.component';


const routes: Routes = [
  {
    path:'user',component: UsuarioComponent
  },
  {
    path:'rol',component: RolComponent
  }, 
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
