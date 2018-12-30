import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album} from '../../rightsides/albums/album/album.component';

@Component({
  selector: 'app-leftside',
  templateUrl: './leftside.component.html',
  styleUrls: ['./leftside.component.css']
})
export class LeftsideComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  albumList: Album[]; // 推荐相册
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

    this.http.get('/blogs/photoalbum/getRecommendList')
      .subscribe((req) => {
        this.albumList = req['photoAlbumList'];
      });
  }

}

/**
 * 分类
 */
export class Classification {
  classification_id: number;
  name: string;
  num: number;
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
  classification_id: string;
  state: string;
  topping: number;
  recommend: number;
}

