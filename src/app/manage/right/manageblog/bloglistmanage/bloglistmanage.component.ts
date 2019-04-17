import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Blog} from '../../../../blog/content/leftsides/leftside/leftside.component';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-bloglistmanage',
  templateUrl: './bloglistmanage.component.html',
  styleUrls: ['./bloglistmanage.component.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../../assets/css/animate.css',
    '../../../../../assets/css/style.css',
    '../../../../../assets/icon/iconfont.css']
})
export class BloglistmanageComponent implements OnInit {
  blogtitle = ''; // 搜索博客
  bloglist: Blog[]; // 当前页面的博客
  locate = 1; // 初始化为0
  httpOptions: any;
  allcount: number; // 所有博客数量
  locatenext1 = 2; // 当前页面的下一页是1
  locatenext2 = 3; // 当前页面的下下页是2
  flag = false; // 是否进行过搜索,默认false
  constructor(private http: HttpClient, private cookies: CookieService,
              private routeInfo: ActivatedRoute, private router: Router,
              private titleService: Title) {
    titleService.setTitle('博客管理');
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };
  }

  // 跳转到下一页
  next() {
    if (this.flag === false) {
      this.locate++;
      this.locatenext1++;
      this.locatenext2++;
      this.http.post('/blogs/admin/blogmanage/getcurrentblog', {'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    } else {
      this.locate++;
      this.locatenext1++;
      this.locatenext2++;
      this.http.post('/blogs/admin/blogmanage/searchblog', {'keyword': this.blogtitle, 'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    }

  }

  // 跳转到上一页
  Previous() {
    if (this.flag === false) {
      this.locate--;
      this.locatenext1--;
      this.locatenext2--;
      this.http.post('/blogs/admin/blogmanage/getcurrentblog', {'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    } else {
      this.locate--;
      this.locatenext1--;
      this.locatenext2--;
      this.http.post('/blogs/admin/blogmanage/searchblog', {'keyword': this.blogtitle, 'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    }
  }

  // 置顶页面做跳转
  change(current) {
    if (this.flag === false) {
      this.locate = current;
      this.locatenext1 = current + 1;
      this.locatenext2 = current + 2;
      this.http.post('/blogs/admin/blogmanage/getcurrentblog', {'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    } else {
      this.locate = current;
      this.locatenext1 = current + 1;
      this.locatenext2 = current + 2;
      this.http.post('/blogs/admin/blogmanage/searchblog', {'keyword': this.blogtitle, 'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
        });
    }
  }

  ngOnInit() {
    this.http.post('/blogs/admin/blogmanage/getcurrentblog', {'locate': (this.locate - 1) * 8}, this.httpOptions)
      .subscribe((req) => {
        this.bloglist = req['list'];
        this.allcount = parseInt(req['count'], 10);
        if (this.allcount % 8 !== 0) {
          this.allcount = parseInt(((this.allcount) / 8).toString(), 10) + 1;
        } else {
          this.allcount = parseInt(((this.allcount) / 8).toString(), 10);
        }
        // alert(this.allcount);
      });
  }

  doOnInput(value) {
    this.blogtitle = value;
  }

  search() {

    if (this.blogtitle === '' && this.flag === true ) {
      this.flag = false;
      this.http.post('/blogs/admin/blogmanage/getcurrentblog', {'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
          this.allcount = parseInt(req['count'], 10);
          if (this.allcount % 8 !== 0) {
            this.allcount = parseInt(((this.allcount) / 8).toString(), 10) + 1;
          } else {
            this.allcount = parseInt(((this.allcount) / 8).toString(), 10);
          }
        });
    } else if (this.blogtitle .trim().length > 0) {
      // 当有搜索的标题的时候
      this.flag = true;
      this.http.post('/blogs/admin/blogmanage/searchblog', {'keyword': this.blogtitle, 'locate': (this.locate - 1) * 8}, this.httpOptions)
        .subscribe((req) => {
          this.bloglist = req['list'];
          this.allcount = parseInt(req['count'], 10);
          if (this.allcount % 8 !== 0) {
            this.allcount = parseInt(((this.allcount) / 8).toString(), 10) + 1;
          } else {
            this.allcount = parseInt(((this.allcount) / 8).toString(), 10);
          }
        });
    }
    event.preventDefault();
  }

  // 删除文章
  delete(id, classificationid) {
    const r = confirm('确定要删除该文章吗？');
    if (r === false) {
      return;
    }
    this.http.post('/blogs/admin/blogmanage/delete', {
      'id': id,
      'classificationid': classificationid, 'locate': this.locate
    }, this.httpOptions)
      .subscribe((req) => {
        this.bloglist = req['list'];
      });
  }

  // 改变置顶的状态
  istop(id, top) {
    if (top === 1) {
      const r = confirm('确定要取消置顶该文章吗？');
      if (r === false) {
        return;
      }
      this.http.post('/blogs/admin/blogmanage/changetopstate', {'id': id, 'top': 0}, this.httpOptions)
        .subscribe((req) => {
          for (let i = 0; i < this.bloglist.length; i++) {
            if (this.bloglist[i].article_id === id) {
              this.bloglist[i].topping = 0;
              break;
            }
          }
        });
    } else {
      const r = confirm('确定要置顶该文章吗？');
      if (r === false) {
        return;
      }
      this.http.post('/blogs/admin/blogmanage/changetopstate', {'id': id, 'top': 1}, this.httpOptions)
        .subscribe((req) => {
          for (let i = 0; i < this.bloglist.length; i++) {
            if (this.bloglist[i].article_id === id) {
              this.bloglist[i].topping = 1;
              break;
            }
          }
        });
    }
  }

  // 改变推荐状态
  recommend(id, recommendstate) {
    if (recommendstate === 1) {
      const r = confirm('确定要取消推荐该文章吗？');
      if (r === false) {
        return;
      }
      this.http.post('/blogs/admin/blogmanage/changerecommendstate', {'id': id, 'recommendstate': 0}, this.httpOptions)
        .subscribe((req) => {
          for (let i = 0; i < this.bloglist.length; i++) {
            if (this.bloglist[i].article_id === id) {
              this.bloglist[i].recommend = 0;
              break;
            }
          }
        });
    } else {
      const r = confirm('确定要推荐该文章吗？');
      if (r === false) {
        return;
      }
      this.http.post('/blogs/admin/blogmanage/changerecommendstate', {'id': id, 'recommendstate': 1}, this.httpOptions)
        .subscribe((req) => {
          for (let i = 0; i < this.bloglist.length; i++) {
            if (this.bloglist[i].article_id === id) {
              this.bloglist[i].recommend = 1;
              break;
            }
          }
        });
    }

  }
}
