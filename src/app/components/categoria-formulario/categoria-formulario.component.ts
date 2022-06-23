import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.scss']
})
export class CategoriaFormularioComponent implements OnInit {

  editMode: boolean = false;

  form: FormGroup = new FormGroup({
    nombre: new FormControl('')
  })

  constructor(
    private dialogRef: MatDialogRef<CategoriaFormularioComponent>,
    private categoriasService: CategoriasService,
    @Inject(MAT_DIALOG_DATA) private categoria: Categoria
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    if (this.categoria) {
      this.editMode = true;
      this.form.get('nombre')?.setValue(this.categoria.nombre);
    }
  }

  enviarFormulario() {
    const nombreDeCategoriaNuevo = this.form.get('nombre')?.value;
    if (this.editMode) {
      this.categoriasService.editarCategoria(this.categoria, nombreDeCategoriaNuevo);
    } else {
      this.categoriasService.agregarCategoria(nombreDeCategoriaNuevo);
    }
    this.dialogRef.close();
  }

}
