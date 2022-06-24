import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  categorias: Categoria[] = [
    new Categoria(1, 'terror'),
    new Categoria(2, 'aventura'),
    new Categoria(3, 'fantástico'),
    new Categoria(4, 'científico'),
    new Categoria(5, 'novela'),
    new Categoria(6, 'general'),
  ];

  constructor() {
  }

  agregarCategoria(nombreDeCategoria: string) {
    const ultimoIdInsertado = this.categorias[this.categorias.length - 1].id;
    const nuevoId = ultimoIdInsertado + 1;
    this.categorias.push(
      new Categoria(nuevoId, nombreDeCategoria)
    );
  }

  editarCategoria(categoria: Categoria, nombreDeCategoriaNuevo: string) {
    const categoriaParaModificar = this.categorias.find(cat => cat.id === categoria.id);
    if (categoriaParaModificar) {
      categoriaParaModificar.nombre = nombreDeCategoriaNuevo;
    }
  }

  eliminarCategoria(categoriaNombre: string) {
    const categoriaPorEliminarIndex = this.categorias.findIndex(cat => cat.nombre === categoriaNombre);
    if (categoriaPorEliminarIndex !== -1) {
      this.categorias.splice(categoriaPorEliminarIndex, 1);
    }
  }

}
