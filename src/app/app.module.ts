import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrosComponent } from './components/libros/libros.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { CategoriaFormularioComponent } from './components/categoria-formulario/categoria-formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LibroFormularioComponent } from './components/libro-formulario/libro-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    CategoriasComponent,
    MenuComponent,
    CategoriaFormularioComponent,
    LibroFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
