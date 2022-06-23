import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CategoriaFormularioComponent } from '../categoria-formulario/categoria-formulario.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categorias: Categoria[] = [];

  constructor(
    private categoriasService: CategoriasService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriasService.categorias$.subscribe(
      categorias => {
        console.log(categorias);
        this.categorias = categorias
      }
    )
  }

  abrirFromularioDeCategorias() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    this.dialog.open(CategoriaFormularioComponent, dialogConfig);
    console.log(this.categorias);
  }

}
