import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from "@angular/material/dialog";
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categoria-formulario',
  templateUrl: './categoria-formulario.component.html',
  styleUrls: ['./categoria-formulario.component.scss']
})
export class CategoriaFormularioComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nombre: new FormControl('')
  })

  constructor(
    private dialogRef: MatDialogRef<CategoriaFormularioComponent>,
    private categoriasService: CategoriasService
  ) { }

  ngOnInit(): void {
  }

  enviarFormulario() {
    const nombreDeCategoria = this.form.get('nombre')?.value;
    this.categoriasService.agregarCategoria(nombreDeCategoria);
  }

}
