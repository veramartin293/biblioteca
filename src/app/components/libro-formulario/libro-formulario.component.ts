import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Categoria } from 'src/app/models/categoria.model';
import { Libro } from 'src/app/models/libro.model';
import { CategoriasService } from 'src/app/services/categorias.service';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-formulario',
  templateUrl: './libro-formulario.component.html',
  styleUrls: ['./libro-formulario.component.scss']
})
export class LibroFormularioComponent implements OnInit {

  editMode: boolean = false;
  leyenda: string = '';

  categorias = this.categoriasService.categorias;

  form: FormGroup = new FormGroup({
    id: new FormControl(0),
    titulo: new FormControl(''),
    autor: new FormControl(''),
    portada: new FormControl(''),
    categorias: new FormArray([])
  })

  constructor(
    private categoriasService: CategoriasService,
    private librosService: LibrosService,
    private dialogRef: MatDialogRef<LibroFormularioComponent>,
    @Inject(MAT_DIALOG_DATA) private liborId: number
  ) { }

  ngOnInit(): void {
    this.setFormMode();
  }

  setFormMode() {
    if (this.liborId) {
      this.editMode = true;
      this.leyenda = 'Editar'
      const libro = this.librosService.getOne(this.liborId);
      this.form.patchValue(libro);
      this.setCategorias(libro.categorias);
    } else {
      this.editMode = false;
      this.leyenda = 'Agregar'
    }
  }

  setCategorias(categorias: string[]) {
    const categoriasForm = this.form.controls.categorias as FormArray;
    for (let categoria of categorias) {
      categoriasForm.push(new FormControl(categoria));
    }
  }

  guardar() {
    if (this.editMode) {
      const libroEditado = this.form.value as Libro;
      this.librosService.editarLibro(libroEditado);
    } else {
      const libroNuevo = this.form.value as Libro;
      this.librosService.agregarLibro(libroNuevo);
    }
    this.dialogRef.close();
  }

  onCategoriaChange(event: any) {
    const categorias = this.form.controls.categorias as FormArray;
    if (event.target.checked) {
      categorias.push(new FormControl(event.target.value));
    } else {
      const seleccionIdx = categorias.controls.findIndex(el => el.value === event.target.value);
      categorias.removeAt(seleccionIdx);
    }

    console.log(this.form.value);
  }

}
