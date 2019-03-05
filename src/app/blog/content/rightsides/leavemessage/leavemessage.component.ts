import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-leavemessage',
  templateUrl: './leavemessage.component.html',
  styleUrls: ['./leavemessage.component.css']
})
export class LeavemessageComponent implements OnInit {

  date: string; // 当前日期
  username = ''; // 默认用户名为空
  avatar = '../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
  content = '';
  reply = '';
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('/blogs/getallleavemessage')
      .subscribe((req) => {
        this.leavemessagelist = req['leavemessagelist'];
      });
  }
  leavemessagelist: LeaveMessage[];
  ngOnInit() {
     this.date = new Date().getFullYear() + '-' + (new Date().getMonth() + 1).toString() + '-' + new Date().getDate();
  }
   myFun(obj) {
     $('#Avatar').find('img').css({'opacity': '0.5'});
     document.getElementById(obj).style.opacity = '1';
     this.avatar = document.getElementById(obj).getAttribute('src');
  }

  onsubmit() {
    if (this.username === '') {
      alert('请输入用户名');
      event.preventDefault();
      return ;
    }
    if (this.content === '') {
      alert('请输入留言内容');
      event.preventDefault();
      return ;
    }
    event.preventDefault();
    this.http.post('/blogs/postleavemessage', {'username': this.username, 'avatar': this.avatar, 'content': this.content
    , 'time': this.date, 'reply': this.reply})
      .subscribe((req) => {
        alert('发表留言成功');
      });
    this.http.post('/blogs/leavemessage/sendArticleEmil',
      {'username': this.username, 'avatar': this.avatar, 'content': this.content
        , 'time': this.date, 'reply': this.reply}).subscribe((req) => {
      this.username = '';
      this.avatar = '../../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
      this.content = '';
      this.reply = '';
      window.location.reload();
      this.leavemessagelist = req['leavemessagelist'];
    });

  }
  // 得到输入的用户名
  doOnInput(event) {
    this.username = event.target.value;
  }

  // 得到留言内容
  doOnInputContent(event) {
    this.content = event.target.value;
  }
}

export class LeaveMessage {
  leavemessage_id: number;
  username: string;
  avatar: string;
  content: string;
  time: string;
  reply: string;
}
