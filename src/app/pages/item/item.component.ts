import { Component, OnInit } from '@angular/core';
import { DetalleProducto } from '../../interfaces/detalle.interface';
import { ActivatedRoute } from '@angular/router';
import { DetalleProductoService } from '../../services/detalle-producto.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  codigo: string;
  producto: DetalleProducto;

  constructor(private router: ActivatedRoute,
    public _detalle: DetalleProductoService) {
    this.router.params.subscribe(params => this.codigo = params.id);
  }

  ngOnInit() {
    this.cargarDetalleProducto(this.codigo);
  }

  cargarDetalleProducto(id: string) {

    this._detalle.cargarDetalle(id)
      .subscribe((resp: any) => {
        this.producto = resp;
      });
  }

}
