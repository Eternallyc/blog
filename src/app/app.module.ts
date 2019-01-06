import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './blog/head/head.component';
import { FooterComponent } from './blog/footer/footer.component';
import { IndexComponent } from './blog/content/rightsides/blog/index/index.component';
import { AlbumComponent } from './blog/content/rightsides/albums/album/album.component';
import { LeavemessageComponent } from './blog/content/rightsides/leavemessage/leavemessage.component';
import { LeftsideComponent } from './blog/content/leftsides/leftside/leftside.component';
import { BlogcontentComponent } from './blog/content/rightsides/blog/blogcontent/blogcontent.component';
import { AboutmeComponent } from './blog/content/rightsides/aboutme/aboutme.component';
import { AlbumcontentComponent } from './blog/content/rightsides/albums/albumcontent/albumcontent.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { Code404Component } from './code404/code404.component';
import { HttpClientModule } from '@angular/common/http';
import { BloglistleftComponent } from './blog/content/leftsides/bloglistleft/bloglistleft.component';
import { ClassificationbloglistComponent } from './blog/content/rightsides/blog/classificationbloglist/classificationbloglist.component';
import { SearchbloglistComponent } from './blog/content/rightsides/blog/searchbloglist/searchbloglist.component';
import { SearchkeywordPipe } from './pipe/searchkeyword.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { LoginComponent } from './manage/login/login.component';
import { HomeComponent } from './manage/right/home/home.component';
import { PersonalcenterComponent } from './manage/right/personalcenter/personalcenter.component';
import { CommentmanageComponent } from './manage/right/commentmanage/commentmanage.component';
import { LeavemessagemanageComponent } from './manage/right/leavemessagemanage/leavemessagemanage.component';
import { ClassificationmanageComponent } from './manage/right/classificationmanage/classificationmanage.component';
import { ManageletfsideComponent } from './manage/left/manageletfside/manageletfside.component';
import { ManagerightheadComponent } from './manage/managerighthead/managerighthead.component';
import { ManagepageComponent } from './manage/managepage/managepage.component';
import { ManagefooterComponent } from './manage/managefooter/managefooter.component';
import {LoginGuard} from './manage/guard/login.guard';
import {CookieService} from 'ngx-cookie-service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { QuillModule } from 'ngx-quill';
import { BloglistmanageComponent } from './manage/right/manageblog/bloglistmanage/bloglistmanage.component';
import { WriteblogComponent } from './manage/right/manageblog/writeblog/writeblog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BloglistmanagesecondaryComponent } from './manage/right/manageblog/bloglistmanagesecondary/bloglistmanagesecondary.component';
const appRoutes: Routes = [
  {path: 'blog', component: BlogpageComponent,
  children: [
    { path: 'index', component: IndexComponent },
    { path: 'search', component: SearchbloglistComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'blogconent/:id', component: BlogcontentComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'leavemessage', component: LeavemessageComponent },
    { path: 'album/:id', component: AlbumcontentComponent},
    { path: 'classification/:classification_id', component: ClassificationbloglistComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'manage', component: ManagepageComponent,
  children: [
    {path: 'home', component: HomeComponent, canActivate: [LoginGuard]},
    {path: 'classification', component: ClassificationmanageComponent},
    {path: 'blogmanage',
    children: [
      {path: 'write', component: WriteblogComponent},
      {path: 'write/:id', component: WriteblogComponent},
      {path: 'bloglistmanage', component: BloglistmanageComponent}
    ]},
  ]},
  { path: '**', component: Code404Component}
];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    IndexComponent,
    AlbumComponent,
    LeavemessageComponent,
    LeftsideComponent,
    BlogcontentComponent,
    AboutmeComponent,
    AlbumcontentComponent,
    BlogpageComponent,
    Code404Component,
    BloglistleftComponent,
    ClassificationbloglistComponent,
    SearchbloglistComponent,
    SearchkeywordPipe,
    LoginComponent,
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
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule, // 导入动画模块
    HttpClientModule,
    NgxEchartsModule,
    EditorModule,
    QuillModule,
    FormsModule
  ],
  providers: [LoginGuard, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
