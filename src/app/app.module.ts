import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './content/rightsides/index/index.component';
import { AlbumComponent } from './content/album/album.component';
import { LeavemessageComponent } from './content/rightsides/leavemessage/leavemessage.component';
import { LeftsideComponent } from './content/leftsides/leftside/leftside.component';
import { BlogcontentComponent } from './content/rightsides/blogcontent/blogcontent.component';
import { AboutmeComponent } from './content/rightsides/aboutme/aboutme.component';


const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'aboutme', component: AboutmeComponent },
  { path: 'blog/:id', component: BlogcontentComponent },
  { path: 'album', component: AlbumComponent },
  { path: 'leavemessage', component: LeavemessageComponent },
  { path: '**', component: IndexComponent }

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
    AboutmeComponent
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
