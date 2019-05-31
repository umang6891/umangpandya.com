import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Starting Componenets */
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './common/top-navigation/top-navigation.component';
import { IndexComponent } from './app-website/index/index.component';
import { BaseComponent } from './app-website/base/base.component';
import { ContactComponent } from './app-website/contact/contact.component';

import { ErrorComponent } from './app-website/error/error.component';
/* End Componenets */

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      }, {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: '**',
        component: ErrorComponent,
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
