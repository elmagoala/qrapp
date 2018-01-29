import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, public toastCtrl: ToastController) {

  }

  scan() {
    this.barcodeScanner.scan().then((barcodeData) => {
        this.mostrarMensaje("Data: "+ barcodeData);
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
