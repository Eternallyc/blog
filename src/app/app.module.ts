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
  { path: '', component: BlogpageComponent, children: [
      { path: '', component: IndexComponent }]},
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
    SearchbloglistComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
