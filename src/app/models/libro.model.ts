export class Libro {
	titulo: string;
	autor: string;
	portada: string;
	categoria: string;

	constructor(titulo: string, autor: string, portada: string, categoria: string) {
		this.titulo = titulo;
		this.autor = autor;
		this.portada = portada;
		this.categoria = categoria;
	}
}