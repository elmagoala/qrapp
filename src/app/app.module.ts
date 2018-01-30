import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//pluggins
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//servicios
import { HistorialService } from '../providers/historial/historial';
//componentes
import { MyApp } from './app.component';
import { HomePage, TabsPage, MapaPage, HistorialPage } from '../pages/index.paginas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    HistorialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MapaPage,
    HistorialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    HistorialService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
