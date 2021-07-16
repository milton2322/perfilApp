import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RolComponent } from './rol/rol.component';
import { ShowRolComponent } from './rol/show-rol/show-rol.component';
import { AddEditRolComponent } from './rol/show-rol/add-edit-rol/add-edit-rol.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUsuarioComponent } from './usuario/show-usuario/show-usuario.component';
import { AddEditUsuarioComponent } from './usuario/add-edit-usuario/add-edit-usuario.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AddEditarUsuarioComponent } from './usuario/show-usuario/add-editar-usuario/add-editar-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    RolComponent,
    ShowRolComponent,
    AddEditRolComponent,
    UsuarioComponent,
    ShowUsuarioComponent,
    AddEditUsuarioComponent,
    AddEditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
