import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

/* Starting Componenets */
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { IndexComponent } from './app-website/index/index.component';
import { BaseComponent } from './app-website/base/base.component';
import { ContactComponent } from './app-website/contact/contact.component';
/* End Componenets */


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    IndexComponent,
    BaseComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
