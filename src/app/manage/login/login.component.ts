import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../assets/css/animate.css'
    , '../../../assets/css/font-awesome/css/font-awesome.css']
})
export class LoginComponent implements OnInit {
  name = '';
  passwd = '';
  flag = false;

  constructor(private titleService: Title, private http: HttpClient, private router: Router, private cookies: CookieService) {
    titleService.setTitle('登录');
  }

  ngOnInit() {
  }

  doOnInputName(event) {
    this.name = event.target.value;
  }

  doOnInputPasswd(event) {
    this.passwd = event.target.value;
  }

  submit() {
    event.preventDefault();
    this.http.post('/blogs/login', {'name': this.name, 'passwd': this.passwd})
      .subscribe((req) => {
        this.flag = req['flag'];
        if (this.flag === false) {
          alert('登录失败，请检查是否是帐号密码错误!');
          this.name = '';
          this.passwd = '';
        } else {
          alert('登录成功!');
          const time = 2 * 60 * 60 * 1000; // 设置两分钟后过期
          const timer = new Date(new Date( ).getTime( ) + time);
          this.cookies.set('message', req['message'], timer);
          this.router.navigate(['/manage/home']);
        }
      });
  }
}
