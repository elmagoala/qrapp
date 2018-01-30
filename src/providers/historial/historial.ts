import { Injectable } from '@angular/core';
import { ScanData } from '../../models/scan-data.model';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Injectable()
export class HistorialService {
  private historial:ScanData[] = [];

  constructor(private iab: InAppBrowser) {

  }
  agregarHistorial(texto:string) {
    let data = new ScanData(texto);
    this.historial.unshift(data);
    this.abrirScan(0);
  }
  cargarHistorial() {
    return this.historial;
  }

  abrirScan( index:number) {
    let scanData = this.historial[index];

    switch( scanData.tipo ) {
      case "http":
        this.iab.create(scanData.info, "_system");
      break
      default:
          console.log("Tipo no soportado");
    }



  }

}
