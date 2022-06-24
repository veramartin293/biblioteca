export class Libro {
	id: number;
	titulo: string;
	autor: string;
	portada: string;
	categorias: string[];

	constructor(
		id: number = 0, 
		titulo: string = '', 
		autor: string = '', 
		portada: string = '', 
		categorias: string[] = []
		) {
		this.id = id;
		this.titulo = titulo;
		this.autor = autor;
		this.portada = portada;
		this.categorias = categorias
	}
}