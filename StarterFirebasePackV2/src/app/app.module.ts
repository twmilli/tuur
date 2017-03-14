import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';

// diretives and providers
import { Loader } from '../providers/loader';
import { Nl2br } from '../pipes/nl2br';
import { AuthenticatorService } from '../providers/authenticator';

// Custom pages generated by ionic generator
import { Menu } from '../pages/menu/menu';
import { AboutPage } from '../pages/menu/about/about';
import { SettingsPage } from '../pages/menu/settings/settings';
// Authentication
import { LoginPage } from '../pages/authentication/login/login';
import { RegistrationPage } from '../pages/authentication/registration/registration';

import { Config } from './config'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SettingsPage,
    Menu,
    LoginPage,
    RegistrationPage,
    Nl2br
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(Config.FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Menu,
    LoginPage,
    RegistrationPage,
    AboutPage,
    SettingsPage
  ],
  providers: [
    Loader,
    AuthenticatorService
  ]
})
export class AppModule {}
