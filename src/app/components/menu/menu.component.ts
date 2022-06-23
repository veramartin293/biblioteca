import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CategoriaFormularioComponent } from '../categoria-formulario/categoria-formulario.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorias: Categoria[] = [];
  categoriaSeleccionada: string = '';

  constructor(
    private categoriasService: CategoriasService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategorias();
    this.getCategoriaActiva();
  }

  getCategoriaActiva() {
    this.route.queryParams.subscribe(params => {
      this.categoriaSeleccionada = params['categoria'];
      if (!this.categoriaSeleccionada) {
        this.categoriaSeleccionada = '';
      }

    })
  }

  getCategorias() {
    this.categorias = this.categoriasService.categorias;
  }

  navegar(categoria: string) {
    this.router.navigate(['/libros'], { queryParams: { categoria } })
  }

  agregarCategoria() {
    this.abrirFromularioDeCategorias(null);
  }

  editarCategoria() {
    const categoriaNombre = this.categoriaSeleccionada;
    const categoria = this.categorias.find(categoria => categoria.nombre === categoriaNombre);
    if (categoria) {
      this.abrirFromularioDeCategorias(categoria);
    }
  }

  eliminarCategoria() {
    const categoriaNombre = this.categoriaSeleccionada;
    this.categoriasService.eliminarCategoria(categoriaNombre);
  }

  abrirFromularioDeCategorias(categoria: Categoria | null) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = categoria;

    this.dialog.open(CategoriaFormularioComponent, dialogConfig);
  }

}
