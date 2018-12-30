import { Component, OnInit } from '@angular/core';
import {Blog, Classification} from '../leftside/leftside.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-bloglistleft',
  templateUrl: './bloglistleft.component.html',
  styleUrls: ['./bloglistleft.component.css']
})
export class BloglistleftComponent implements OnInit {

  constructor(private http: HttpClient) { }
  classificationlist: Classification[]; // 分类
  recommendlist: Blog[]; // 推荐博客
  ngOnInit() {
    this.http.get('/blogs/classification/simplelist')
      .subscribe((req) => {
        this.classificationlist = req['simplelist'];
      });

    this.http.get('/blogs/article/getrecommendlist')
      .subscribe((req) => {
        this.recommendlist = req['recommendlist'];
      });
  }
  change(){
    location.reload();
  }

}
