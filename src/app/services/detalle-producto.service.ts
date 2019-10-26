import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetalleProductoService {

  readonly url = 'https://angular-html5-e06e6.firebaseio.com/productos/'; 

  constructor(private http: HttpClient) { }

  cargarDetalle(cod: string) {
    return this.http.get(this.url + `${cod}` + '.json'); // + `${cod}` + '.json'
  }
  
}
