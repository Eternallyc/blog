import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../../rightsides/albums/album/album.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) {
  }
  albumList: Album[]; // 推荐相册
  classificationlist: Classification[]; // 分类
  recommendlist: Blog[]; // 推荐博客
  searchcontent: string; // 搜索内容
  ngOnInit() {
    this.http.get('/blogs/classification/indexleftlist')
      .subscribe((req) => {
        this.classificationlist = req['simplelist'];
        this.recommendlist = req['recommendlist'];
        this.albumList = req['photoAlbumList'];
      });
  }

  search() {
    if (this.searchcontent === '' || this.searchcontent === undefined) {
      alert('请输入关键字词！！！');
      event.preventDefault();
      return ;
    }
    this.router.navigate(['blog/search'], {
      queryParams: {
        keyword: this.searchcontent
      }
    });
  }
  doOnInput(event) {
    this.searchcontent = event.target.value;
  }
}

/**
 * 分类
 */
export class Classification {
  classification_id: number;
  name: string;
  num: number;
  isvisiable: number;
}

/**
 * 推荐博客
 */
export class Blog {
  article_id: string;
  article_title: string;
  article_time: string;
  article_content: string;
  like_number: string;
  read_number: string;
  comment_number: number;
  classification: Classification;
  state: string;
  topping: number;
  recommend: number;
}

