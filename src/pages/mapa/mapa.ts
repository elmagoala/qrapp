import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html',
})
export class MapaPage {
  lat: number;
  lng: number;

  constructor(public navParams: NavParams,
              private viewCtrl: ViewController) {

    let coordenadas = this.navParams.get("coordenadas").split(",");
    this.lat = Number(coordenadas[0].replace("geo:",""));
    this.lng = Number(coordenadas[1]);
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

}
