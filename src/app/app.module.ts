import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {Code404Component} from './code404/code404.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxEchartsModule} from 'ngx-echarts';
import {LoginComponent} from './manage/login/login.component';
import {LoginGuard} from './manage/guard/login.guard';
import {CookieService} from 'ngx-cookie-service';
import {EditorModule} from '@tinymce/tinymce-angular';
import {QuillModule} from 'ngx-quill';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FileUploadModule} from 'ng2-file-upload';
const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './blog/blogpage/blogpage.module#BlogpageModule'
  },
  {path: 'login', component: LoginComponent},
  {
    path: 'manage',
    loadChildren: './manage/managepage/managepage.module#ManagepageModule'
  },
  {path: '**', component: Code404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Code404Component,
    LoginComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true},
    ),
    BrowserModule,
    BrowserAnimationsModule, // 导入动画模块
    HttpClientModule,
    NgxEchartsModule,
    EditorModule,
    QuillModule,
    FormsModule,
    CommonModule,
    FileUploadModule
  ],
  providers: [LoginGuard, CookieService,
    // {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
