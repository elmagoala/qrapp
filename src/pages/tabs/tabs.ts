import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage, HistorialPage } from '../index.paginas';
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any = HomePage;
  tab2:any = HistorialPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
