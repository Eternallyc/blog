import { Component, OnInit } from '@angular/core';
import {Blog} from '../../../leftsides/leftside/leftside.component';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blogcontent',
  templateUrl: './blogcontent.component.html',
  styleUrls: ['./blogcontent.component.css']
})
export class BlogcontentComponent implements OnInit {

  date: string; // 当前日期
  username = ''; // 默认用户名为空
  avatar = '../../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
  content = '';
  reply = '';

  currentblog: Blog;
  currentblogid: string;
  commentlist: Comment[];
  constructor(private routeInfo: ActivatedRoute, private router: Router, private http: HttpClient) {
    // 获取到当前博客的id
    this.currentblogid = this.routeInfo.snapshot.paramMap.get('id');
   this.http.post('/blogs/article/getCurrentBlog', {'id': this.currentblogid})
     .subscribe((req) => {
      this.currentblog = req['article'];
      this.commentlist = req['commentlist'];
     });
    this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getDate();
  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  pointlike() {
    this.http.post('/blogs/article/pointlike', {'id': this.currentblogid})
      .subscribe((req) => {
        this.currentblog = req['article'];
        alert('点赞成功!');
      });
  }
  myFun(obj) {
    $('#Avatar').find('img').css({'opacity': '0.5'});
    document.getElementById(obj).style.opacity = '1';
    this.avatar = document.getElementById(obj).getAttribute('src');
  }

  // 得到输入的用户名
  doOnInput(event) {
    this.username = event.target.value;
  }

  // 得到评论内容
  doOnInputContent(event) {
    this.content = event.target.value;
  }
  onsubmit() {
    if (this.username === '') {
      alert('请输入用户名');
      event.preventDefault();
      return ;
    }
    if (this.content === '') {
      alert('请输入评论内容');
      event.preventDefault();
      return ;
    }
    event.preventDefault();

    this.http.post('/blogs/article/commentcurrent', {'currentblogid': this.currentblogid, 'username': this.username, 'avatar': this.avatar, 'content': this.content
      , 'time': this.date, 'reply': this.reply})
      .subscribe((req) => {
        this.commentlist = req['commentlist'];
        alert('发表留言成功');
        this.username = '';
        this.avatar = '../../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
        this.content = '';
        this.reply = '';
      });

  }
}

/**
 * 评论类
 */
export class Comment {
  comment_id: number;
  article_id: number;
  comment_username: string;
  comment_avatar: string;
  comment_content: string;
  comment_time: string;
  reply: string;
}

