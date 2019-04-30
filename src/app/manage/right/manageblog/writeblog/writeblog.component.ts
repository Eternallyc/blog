import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blog, Classification} from '../../../../blog/content/leftsides/leftside/leftside.component';
import {CookieService} from 'ngx-cookie-service';
import {formatDate} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-writeblog',
  templateUrl: './writeblog.component.html',
  styleUrls: ['./writeblog.component.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../../assets/css/animate.css',
    '../../../../../assets/css/style.css']
})
export class WriteblogComponent implements OnInit {

  title = ''; // 博客标题
  content = ''; // 博客内容
  type = 0; // 博客分类
  top = 0; // 默认不置顶
  date: string; // 当前日期
  classificationlist: Classification[];
  httpOptions: any;
  currentblogid: string; // 当前博客的id

  currentblog: Blog; // 当前博客
  constructor(private http: HttpClient, private cookies: CookieService,
              private routeInfo: ActivatedRoute, private titleService: Title) {
    titleService.setTitle('编写博客');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };

    // 需要判断是否是重编辑博客--获取到当前博客的id
    this.currentblogid = this.routeInfo.snapshot.paramMap.get('id');
    if (this.currentblogid != null) {
      this.http.post('/blogs/article/getCurrentBlog', {'id': this.currentblogid}, this.httpOptions)
        .subscribe((req) => {
          this.currentblog = req['article'];
          this.title = this.currentblog.article_title;
          this.content = this.currentblog.article_content;
          this.type = this.currentblog.classification.classification_id;
          this.top = this.currentblog.topping;
        });
    }
  }
  uploader: FileUploader = new FileUploader({
    url: 'blogs/picture/uploadClient'
    , method: 'POST'
    , itemAlias: 'article_image'
    , autoUpload: true
  });
  ngOnInit() {
    this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString() + '-'
      + new Date().getDate() + ' ' + new Date().getHours() + ':' + new Date().getMinutes() +
    ':' + new Date().getSeconds();
    this.uploader.onSuccessItem =  (item, response, status, headers) => {
      if (status === 200) {
        const img = '<img  src="' + response.split('?')[0] + '" ' +
          'width="600px" height="300px">';
        this.content += img;
      }
    };
    // 得到所有分类
    this.http.get('/blogs/admin/blogwrite/getallclassification', this.httpOptions)
      .subscribe((req) => {
        this.classificationlist = req['list'];
      });
  }
  doOnInput(event) {
    this.title = event.target.value;
  }
  // 得到博客的分类
  getType(id) {
    this.type = id;
  }
  // 博客是否置顶
  getTop(top) {
    this.top = top;
  }
  // 发表博客
  publish() {
    if (this.title === '') {
      alert('请输入文章标题！！！');
      return ;
    }
    if (this.content === '') {
      alert('请输入文章内容！！！');
      return ;
    }
    if (this.type === 0) {
      alert('请选择文章分类！！！');
      return ;
    }
    const r = confirm('确认发表吗？');
    if (r === true) {
      this.http.post('/blogs/admin/blogwrite/publishblog', {'title': this.title,
        'content': this.content, 'type': this.type, 'top': this.top, 'time': this.date,
      'state': 1}, this.httpOptions)
        .subscribe((req) => {
          alert('发表成功！！');
          window.location.reload();
        });
    }
    return;
  }

  // 保存博客
  save() {
    if (this.title === '') {
      alert('请输入文章标题！！！');
      return ;
    }
    if (this.content === '') {
      alert('请输入文章内容！！！');
      return ;
    }
    if (this.type === 0) {
      alert('请选择文章分类！！！');
      return ;
    }
    const r = confirm('确认保存吗？');
    if (r === true) {
      this.http.post('/blogs/admin/blogwrite/saveblog', {'title': this.title,
        'content': this.content, 'type': this.type, 'top': this.top, 'time': this.date,
        'state': 0}, this.httpOptions)
        .subscribe((req) => {
          alert('保存成功！！');
          window.location.reload();
        });
    }
    return;
  }
}

