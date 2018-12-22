import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './blog/head/head.component';
import { FooterComponent } from './blog/footer/footer.component';
import { IndexComponent } from './blog/content/rightsides/index/index.component';
import { AlbumComponent } from './blog/content/albums/album/album.component';
import { LeavemessageComponent } from './blog/content/rightsides/leavemessage/leavemessage.component';
import { LeftsideComponent } from './blog/content/leftsides/leftside/leftside.component';
import { BlogcontentComponent } from './blog/content/rightsides/blogcontent/blogcontent.component';
import { AboutmeComponent } from './blog/content/rightsides/aboutme/aboutme.component';
import { AlbumcontentComponent } from './blog/content/albums/albumcontent/albumcontent.component';
import { BlogpageComponent } from './blog/blogpage/blogpage.component';
import { Code404Component } from './code404/code404.component';


const appRoutes: Routes = [
  {path: 'blog', component: BlogpageComponent,
  children: [
    { path: 'index', component: IndexComponent },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'blogconent/:id', component: BlogcontentComponent },
    { path: 'album', component: AlbumComponent },
    { path: 'leavemessage', component: LeavemessageComponent },
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
    Code404Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
