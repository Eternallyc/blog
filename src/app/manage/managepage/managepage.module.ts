import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManagepageComponent} from './managepage.component';
import {HomeComponent} from '../right/home/home.component';
import {LoginGuard} from '../guard/login.guard';
import {ClassificationmanageComponent} from '../right/classificationmanage/classificationmanage.component';
import {WriteblogComponent} from '../right/manageblog/writeblog/writeblog.component';
import {BloglistmanageComponent} from '../right/manageblog/bloglistmanage/bloglistmanage.component';
import {PersonalprofileComponent} from '../right/messagemanage/personalprofile/personalprofile.component';
import {AboutmemanageComponent} from '../right/messagemanage/aboutmemanage/aboutmemanage.component';
import {PasswdmanageComponent} from '../right/messagemanage/passwdmanage/passwdmanage.component';
import {CommentmanageComponent} from '../right/commentmanage/commentmanage.component';
import {CookieService} from 'ngx-cookie-service';
import {FileUploadModule} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {QuillModule} from 'ngx-quill';
import {NgxEchartsModule} from 'ngx-echarts';
import {HttpClientModule} from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PersonalcenterComponent} from '../right/personalcenter/personalcenter.component';
import {LeavemessagemanageComponent} from '../right/leavemessagemanage/leavemessagemanage.component';
import {ManageletfsideComponent} from '../left/manageletfside/manageletfside.component';
import {ManagerightheadComponent} from '../managerighthead/managerighthead.component';
import {ManagefooterComponent} from '../managefooter/managefooter.component';
import {BloglistmanagesecondaryComponent} from '../right/manageblog/bloglistmanagesecondary/bloglistmanagesecondary.component';



const managePageRoutes: Routes = [
  {
    path: '', component: ManagepageComponent,
    children: [
      {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
      {path: 'leavemessage', component: LeavemessagemanageComponent, canActivate: [LoginGuard]},
      {path: 'classification', component: ClassificationmanageComponent},
      {
        path: 'blogmanage',
        children: [
          {path: 'write', component: WriteblogComponent},
          {path: 'write/:id', component: WriteblogComponent},
          {path: 'bloglistmanage', component: BloglistmanageComponent}
        ]
      },
      {
        path: 'messagemanage',
        children: [
          {path: 'personalprofile', component: PersonalprofileComponent},
          {path: 'aboutmessage', component: AboutmemanageComponent},
          {path: 'passwdmanage', component: PasswdmanageComponent}
        ]
      },
      {path: 'blogcommentmanage', component: CommentmanageComponent}
    ], canActivate: [LoginGuard]
  },
];

@NgModule({
  declarations: [
    ManagepageComponent,
    HomeComponent,
    PersonalcenterComponent,
    CommentmanageComponent,
    LeavemessagemanageComponent,
    ClassificationmanageComponent,
    ManageletfsideComponent,
    ManagerightheadComponent,
    ManagepageComponent,
    ManagefooterComponent,
    BloglistmanageComponent,
    WriteblogComponent,
    BloglistmanagesecondaryComponent,
    PersonalprofileComponent,
    PasswdmanageComponent,
    AboutmemanageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(managePageRoutes),
    NgbModule,
    HttpClientModule,
    NgxEchartsModule,
    QuillModule,
    FormsModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [LoginGuard, CookieService],
  exports: [RouterModule]
})
export class ManagepageModule {
}
