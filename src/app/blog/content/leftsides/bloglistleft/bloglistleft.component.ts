import {Component, OnInit} from '@angular/core';
import {Blog, Classification} from '../leftside/leftside.component';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-bloglistleft',
  templateUrl: './bloglistleft.component.html',
  styleUrls: ['./bloglistleft.component.css']
})
export class BloglistleftComponent implements OnInit {

  keyword = '';

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {
   this.keyword = '';
    activatedRoute.queryParams.subscribe(queryParams => {
      this.keyword = queryParams.keyword; // 获得关键词
    });
  }

  classificationlist: Classification[]; // 分类
  recommendlist: Blog[]; // 推荐博客
  clickrank: Blog[]; // 点击排行
  ngOnInit() {
    this.http.get('/blogs/classification/classificationleft')
      .subscribe((req) => {
        this.classificationlist = req['simplelist'];
        this.recommendlist = req['recommendlist'];
        this.clickrank = req['clickranklist'];
      });
  }

  change() {
    location.reload();
  }

  doOnInput(event) {
    this.keyword = event.target.value;
  }

  search() {
    if (this.keyword === '' || this.keyword === undefined) {
      alert('请输入关键字词！！！');
      event.preventDefault();
      return;
    }
    event.preventDefault();
    location.reload();
    this.router.navigate(['/blog/search'], {
      queryParams: {
        keyword: this.keyword
      }
    });
  }

}
