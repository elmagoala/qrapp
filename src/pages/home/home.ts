import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController, Platform } from 'ionic-angular';
import { HistorialService } from '../../providers/historial/historial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner,
              public toastCtrl: ToastController,
              private platform: Platform,
              private historialService: HistorialService) {

  }

  scan() {
    if(!this.platform.is('cordova')) {
      this.historialService.agregarHistorial("http://www.google.com");
      return;
    }

    this.barcodeScanner.scan().then((barcodeData) => {
        //this.mostrarMensaje(barcodeData.text);
        if(!barcodeData.cancelled && barcodeData.text != null) {
          this.historialService.agregarHistorial(barcodeData.text);
        }
    }, (err) => {
        this.mostrarMensaje("Error: "+ err);
    });
  }

  private mostrarMensaje(mensaje:string) {
    let toast = this.toastCtrl.create({
      message: mensaje,
      duration: 1800,
      position: "middle"
    });
    toast.present();
  }

}
