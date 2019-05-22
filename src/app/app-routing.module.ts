import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Starting Componenets */
import { AppComponent } from './app.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { IndexComponent } from './app-website/index/index.component';
import { BaseComponent } from './app-website/base/base.component';
/* End Componenets */

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      // {
      //   path: 'about-me',
      //   component: AppAboutComponent,
      // },
      // {
      //   path: 'skill',
      //   component: AppSkillComponent,
      // },
      // {
      //   path: 'experience',
      //   component: AppExperienceComponent,
      // },
      // {
      //   path: 'education',
      //   component: AppEducationComponent,
      // },
      // {
      //   path: 'my-work',
      //   component: AppMyWorkComponent,
      // },
      // {
      //   path: 'contact-me',
      //   component: AppContactMeComponent,
      // },
      // {
      //   path: 'profile/institute/:university_id',
      //   component: ProfileInstituteComponent,
      // },
      // {
      //   path: '**',
      //   component: Error404Component,
      // }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
