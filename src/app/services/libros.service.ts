import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    new Libro(
      1,
      'el principito',
      'manuel rodriguez',
      'https://m.media-amazon.com/images/I/51XQ5Q4CgBL.jpg',
      ['aventura', 'terror', 'novela']
    ),
    new Libro(
      2,
      'harry potter 1',
      'andrea bustamante',
      'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
      ['fantástico', 'novela']
    ),
    new Libro(
      3,
      'harry potter 2',
      'andrea bustamante',
      'https://images-na.ssl-images-amazon.com/images/I/91+BwNDpbSL.jpg',
      ['fantástico', 'científico']
    )
  ];

  constructor() { }

  getOne(id: number): Libro {
    const libro = this.libros.find(el => el.id === id);
    if (libro) {
      return new Libro(
        libro.id,
        libro.titulo,
        libro.autor,
        libro.portada,
        libro.categorias
      );
    }
    return new Libro();
  }

  editarLibro(libro: Libro) {
    const libroPorEditarIdx = this.libros.findIndex(el => el.id === libro.id);
    if (libroPorEditarIdx !== -1) {
      console.log(libroPorEditarIdx);
      this.libros[libroPorEditarIdx] = libro;
    }
  }

  agregarLibro(libro: Libro) {
    const nuevoId = this.libros[this.libros.length - 1].id + 1;
    libro.id = nuevoId;
    this.libros.push(libro);
  }

  eliminarLibro(libroId: number) {
    const libroPorEliminarIdx = this.libros.findIndex(el => el.id === libroId);
    if (libroPorEliminarIdx !== -1) {
      this.libros.splice(libroPorEliminarIdx, 1);
    }
  }
}
