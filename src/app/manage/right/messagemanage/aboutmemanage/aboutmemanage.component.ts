import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aboutmemanage',
  templateUrl: './aboutmemanage.component.html',
  styleUrls: ['./aboutmemanage.component.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../../assets/css/animate.css',
    '../../../../../assets/css/style.css']
})
export class AboutmemanageComponent implements OnInit {
  title = ''; // 关于我的标题
  content = ''; // 关于我的内容
  httpOptions: any;
  constructor(private http: HttpClient, private cookies: CookieService, private routeInfo: ActivatedRoute) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };

  }

  ngOnInit() {
    // 得到所有分类
    this.http.get('/blogs/admin/getTitleAndMessage', this.httpOptions)
      .subscribe((req) => {
        this.title = req['title'];
        this.content = req['content'];
      });
  }
  doOnInput(event) {
    this.title = event.target.value;
  }

  // 保存博客
  save() {
    if (this.title === '') {
      alert('请输入关于我标题！！！');
      return ;
    }
    if (this.content === '') {
      alert('请输入关于我内容！！！');
      return ;
    }
    const r = confirm('确认保存吗？');
    if (r === true) {
      this.http.post('/blogs/admin/saveTitleAndMessage', {'title': this.title,
        'content': this.content}, this.httpOptions)
        .subscribe((req) => {
          alert('保存成功！！');
          window.location.reload();
        });
    }
    return;
  }
}
