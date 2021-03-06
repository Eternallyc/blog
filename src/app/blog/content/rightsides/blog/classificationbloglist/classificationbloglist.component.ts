import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Blog, Classification} from '../../../leftsides/leftside/leftside.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-classificationbloglist',
  templateUrl: './classificationbloglist.component.html',
  styleUrls: ['./classificationbloglist.component.css']
})
export class ClassificationbloglistComponent implements OnInit {
  classification_id: string;
  name: string;
  bloglist: Blog[];
  constructor(private routeInfo: ActivatedRoute, private router: Router, private http: HttpClient ) {
// 获取到当前分类的id
    this.classification_id = this.routeInfo.snapshot.paramMap.get('classification_id');
    //  通过ID获取当前的分类名和分类中存在的文章
    this.http.post('/blogs/classification/getNameAndList', {'classification_id': this.classification_id})
      .subscribe((req) => {
        // 获取分类名
        this.name = req['name'];
        // 获取分类中的文章
        this.bloglist = req['list'];
      });
  }

  ngOnInit() {

  }
// 默认排序
  defaultsort() {
    document.getElementById('timesort').className = 'btn-filter-sort';
    document.getElementById('defaultsort').className = 'btn-filter-sort active';
    document.getElementById('readnumsort').className = 'btn-filter-sort';
    $('');
    this.http.post('/blogs/classification/defaultsort', {'classification_id': this.classification_id})
      .subscribe((req) => {
        this.bloglist = req['list'];
      });
  }

  // 根据更新时间排序
  timesort() {
    document.getElementById('timesort').className = 'btn-filter-sort active';
    document.getElementById('defaultsort').className = 'btn-filter-sort';
    document.getElementById('readnumsort').className = 'btn-filter-sort';

    this.http.post('/blogs/classification/timesort', {'classification_id': this.classification_id})
      .subscribe((req) => {
        this.bloglist = req['list'];
      });
  }

  // 根据访问量排序
  readnumsort() {
    document.getElementById('timesort').className = 'btn-filter-sort';
    document.getElementById('defaultsort').className = 'btn-filter-sort';
    document.getElementById('readnumsort').className = 'btn-filter-sort active';
    this.http.post('/blogs/classification/readnumsort', {'classification_id': this.classification_id})
      .subscribe((req) => {
        this.bloglist = req['list'];
      });
  }
}
