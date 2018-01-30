import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HistorialService } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

  historial: ScanData[] = [];
  constructor(private historialService:HistorialService) {
  }

  ionViewDidLoad() {
    this.historial = this.historialService.cargarHistorial();
  }

  abrirScan( index:number ) {
    this.historialService.abrirScan(index);
  }

}
