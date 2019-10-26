import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Equipo } from '../interfaces/equipo-dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = true;

  // equipo
  equipo: Equipo[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {

    console.log('Servcio Json');
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp;
        this.cargada = false;
      });

  }

  private cargarEquipo() {

    console.log('Equipo Json');
    this.http.get('https://angular-html5-e06e6.firebaseio.com/equipo.json')
      .subscribe((resp: Equipo[]) => {
        this.cargada = false;
        this.equipo = resp;
      });

  }

}
