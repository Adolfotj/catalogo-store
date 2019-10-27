import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  readonly url = 'https://angular-html5-e06e6.firebaseio.com/productos_idx.json';
  cargado = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  cargarProductos() {

    return new Promise((resolve, reject) => {

      this.http.get(this.url).subscribe(
        (resp: Producto[]) => {        
          this.productos = resp;
          this.cargado = false;
          resolve();       
        });

    });
    
  }

  cargarFiltrado(termino: string) {

    if (this.productos.length === 0) {
      this.cargarProductos().then(()=> {
        this.filtrarProductos(termino);
      })
    }else{
      this.filtrarProductos(termino);
    }
    
  }

  filtrarProductos(termino: string) {

    this.productosFiltrado = [];
    const filterValue = termino.toLowerCase();

    this.productos.forEach(prod => {
      
      const tituloLower = prod.titulo.toLowerCase();

      if (prod.categoria.includes(filterValue) || tituloLower.includes(filterValue)) {
       this.productosFiltrado.push(prod);       
      }
    });

  }


}
