import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Blog} from '../../../leftsides/leftside/leftside.component';
import {Pipe, Injectable, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-searchbloglist',
  templateUrl: './searchbloglist.component.html',
  styleUrls: ['./searchbloglist.component.css']
})

export class SearchbloglistComponent implements OnInit{
  keyword: string;
  searchblogs: Blog[];

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private sanitizer: DomSanitizer) {
    activatedRoute.queryParams.subscribe(queryParams => {
      this.keyword = queryParams.keyword; // 获得关键词
    });
    http.post('/blogs/article/searcharticles', {'keyword': this.keyword})
      .subscribe((req) => {
        this.searchblogs = req['list'];
      });
  }


  ngOnInit() {
  }

}
