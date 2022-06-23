import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: Categoria[] = [
    new Categoria(1, 'terror'),
    new Categoria(2, 'aventura'),
    new Categoria(3, 'fantástico'),
    new Categoria(4, 'científico'),
  ];

  private categoriasSubject = new BehaviorSubject<Categoria[]>(this.categorias);
  public categorias$ = this.categoriasSubject.asObservable();

  constructor() {
  }

  agregarCategoria(nombreDeCategoria: string) {
    const ultimoIdInsertado = this.categorias[this.categorias.length - 1].id;
    const nuevoId = ultimoIdInsertado + 1;
    this.categorias.push(
      new Categoria(nuevoId, nombreDeCategoria)
    );
    this.categoriasSubject.next(this.categorias);
  }

}
