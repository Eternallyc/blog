import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Blog} from '../../../leftsides/leftside/leftside.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }

  commonList: Blog[]; // 不置顶的博客
  toppingList: Blog[]; // 置顶的博客

  ngOnInit() {
    this.http.get('/blogs/article/getallarticles/defaultsort')
      .subscribe((req) => {
        this.commonList = req['commonlist'];
        this.toppingList = req['toppinglist'];
        console.log(this.commonList);
      });
  }


  // 默认排序
  defaultsort() {
    document.getElementById('timesort').className = 'btn-filter-sort';
    document.getElementById('defaultsort').className = 'btn-filter-sort active';
    document.getElementById('readnumsort').className = 'btn-filter-sort';
    $('');
    this.http.get('/blogs/article/getallarticles/defaultsort')
      .subscribe((req) => {
        this.commonList = req['commonlist'];
        this.toppingList = req['toppinglist'];
      });
  }

  // 根据更新时间排序
  timesort() {
    document.getElementById('timesort').className = 'btn-filter-sort active';
    document.getElementById('defaultsort').className = 'btn-filter-sort';
    document.getElementById('readnumsort').className = 'btn-filter-sort';

    this.http.get('/blogs/article/getallarticles/timesort')
      .subscribe((req) => {
        this.commonList = req['list'];
        this.toppingList.length = 0;
      });
  }

  // 根据访问量排序
  readnumsort() {
    document.getElementById('timesort').className = 'btn-filter-sort';
    document.getElementById('defaultsort').className = 'btn-filter-sort';
    document.getElementById('readnumsort').className = 'btn-filter-sort active';
    this.http.get('/blogs/article/getallarticles/readnumsort')
      .subscribe((req) => {
        this.commonList = req['list'];
        this.toppingList.length = 0;
      });
  }
}

