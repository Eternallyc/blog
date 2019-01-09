import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-passwdmanage',
  templateUrl: './passwdmanage.component.html',
  styleUrls: ['./passwdmanage.component.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../../assets/css/animate.css',
    '../../../../../assets/css/style.css']
})
export class PasswdmanageComponent implements OnInit {
  passwd = '';
  confirm = '';
  httpOptions: any;
  constructor(private router: Router, private http: HttpClient, private cookies: CookieService, private routeInfo: ActivatedRoute) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };
  }

  ngOnInit() {
  }
  onsubmit() {
    if (this.passwd === '') {
      alert('请输入密码');
      return ;
    }
    if (this.confirm === '') {
      alert('请输入确认密码');
      return ;
    }
    if (this.passwd !== this.confirm) {
      alert('两次密码不一致');
      return ;
    }
    if (confirm('确认修改密码吗？')) {
      this.http.post('/blogs/admin/changeuserpwd', {'passwd': this.passwd}, this.httpOptions)
        .subscribe((req) => {
          alert('修改成功');
          this.cookies.delete('message');
          this.router.navigateByUrl('login');
        });
    }
  }
  doOnInputPassWd(obj) {
    this.passwd = obj;
  }
  doOnInputConfirm(obj) {
    this.confirm = obj;
  }
}
