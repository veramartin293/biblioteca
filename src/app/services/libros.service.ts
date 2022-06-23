import { Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros: Libro[] = [
    new Libro(
      'el principito',
      'manuel rodriguez',
      'https://m.media-amazon.com/images/I/51XQ5Q4CgBL.jpg',
      'aventura'
    ),
    new Libro(
      'harry potter 1',
      'andrea bustamante',
      'https://images-na.ssl-images-amazon.com/images/I/91R1AixEiLL.jpg',
      'fantástico'
    ),
    new Libro(
      'harry potter 2',
      'andrea bustamante',
      'https://images-na.ssl-images-amazon.com/images/I/91+BwNDpbSL.jpg',
      'fantástico'
    )
  ];

  constructor() { }
}
