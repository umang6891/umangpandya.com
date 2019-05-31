import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* Starting Componenets */
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './common/top-navigation/top-navigation.component';
import { IndexComponent } from './app-website/index/index.component';
import { BaseComponent } from './app-website/base/base.component';
import { ContactComponent } from './app-website/contact/contact.component';

import { ErrorComponent } from './app-website/error/error.component';
/* End Componenets */


@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    IndexComponent,
    BaseComponent,
    ContactComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
