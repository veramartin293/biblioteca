import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Libro } from 'src/app/models/libro.model';
import { LibrosService } from 'src/app/services/libros.service';
import { LibroFormularioComponent } from '../libro-formulario/libro-formulario.component';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  libros: Libro[] = this.librosService.libros;
  librosFiltrados: Libro[] = [];
  categoriaSeleccionada: string = '';

  constructor(
    private librosService: LibrosService,
    private dialog: MatDialog,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onCateforiaSelectedChange();
    this.onOperationCompleted();
  }

  onCateforiaSelectedChange() {
    this.route.queryParams.subscribe(params => {
      this.categoriaSeleccionada = params.categoria;
      this.filtrarLibros();
    })
  }

  onOperationCompleted() {
    this.librosService.operacionCompletada$.subscribe(
      resp => {
        this.filtrarLibros();
      }
    )
  }

  filtrarLibros() {
    this.librosFiltrados = this.libros.filter(
      libro => (this.categoriaSeleccionada === undefined) ? true : libro.categorias.includes(this.categoriaSeleccionada)
    );
  }

  editarLibro(libroId: number) {
    this.abrirFormularioDeLibros(libroId);
  }

  agregarLibro() {
    this.abrirFormularioDeLibros();
  }

  abrirFormularioDeLibros(libroId: number = 0) {
    const  dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = libroId;

    this.dialog.open(LibroFormularioComponent, dialogConfig);
  }

  eliminarLibro(libroId: number) {
    this.librosService.eliminarLibro(libroId);
    this.filtrarLibros();
  }

  setDefaultImg(event: any) {
    event.target.src = '../../img';
  }
}
