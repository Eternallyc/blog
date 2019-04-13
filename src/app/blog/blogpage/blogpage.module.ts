import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';
import {BlogpageComponent} from './blogpage.component';
import {IndexComponent} from '../content/rightsides/blog/index/index.component';
import {SearchbloglistComponent} from '../content/rightsides/blog/searchbloglist/searchbloglist.component';
import {AboutmeComponent} from '../content/rightsides/aboutme/aboutme.component';
import {BlogcontentComponent} from '../content/rightsides/blog/blogcontent/blogcontent.component';
import {AlbumComponent} from '../content/rightsides/albums/album/album.component';
import {LeavemessageComponent} from '../content/rightsides/leavemessage/leavemessage.component';
import {AlbumcontentComponent} from '../content/rightsides/albums/albumcontent/albumcontent.component';
import {ClassificationbloglistComponent} from '../content/rightsides/blog/classificationbloglist/classificationbloglist.component';
import {HeadComponent} from '../head/head.component';
import {FooterComponent} from '../footer/footer.component';
import {LeftsideComponent} from '../content/leftsides/leftside/leftside.component';
import {BloglistleftComponent} from '../content/leftsides/bloglistleft/bloglistleft.component';
import {SearchkeywordPipe} from '../../pipe/searchkeyword.pipe';
import {HomeComponent} from '../../manage/right/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {QuillModule} from 'ngx-quill';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FileUploadModule} from 'ng2-file-upload';
import {LoginGuard} from '../../manage/guard/login.guard';
import {CookieService} from 'ngx-cookie-service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const blogRoutes: Routes = [
  {
    path: '', component: BlogpageComponent, children: [
      {path: '', component: IndexComponent},
    ]
  },
  {
    path: 'blog', component: BlogpageComponent,
    children: [
      {path: 'index', component: IndexComponent},
      {path: 'search', component: SearchbloglistComponent},
      {path: 'aboutme', component: AboutmeComponent},
      {path: 'blogconent/:id', component: BlogcontentComponent},
      {path: 'album', component: AlbumComponent},
      {path: 'leavemessage', component: LeavemessageComponent},
      {path: 'album/:id', component: AlbumcontentComponent},
      {path: 'classification/:classification_id', component: ClassificationbloglistComponent}
    ]
  }
];

@NgModule({
  declarations: [
    BlogpageComponent,
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
    BloglistleftComponent,
    ClassificationbloglistComponent,
    SearchbloglistComponent,
    SearchkeywordPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(blogRoutes),
    NgbModule,
    HttpClientModule,
    NgxEchartsModule,
    QuillModule,
    FormsModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [LoginGuard, CookieService,],
  exports: [RouterModule]
})
export class BlogpageModule {
}
