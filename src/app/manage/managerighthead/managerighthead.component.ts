import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managerighthead',
  templateUrl: './managerighthead.component.html',
  styleUrls: ['./managerighthead.component.css',
    '../../../assets/css/bootstrap.css',
    '../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../assets/css/animate.css',
    '../../../assets/css/style.css']
})
export class ManagerightheadComponent implements OnInit {

  constructor(private router: Router, private cookies: CookieService) { }

  ngOnInit() {
  }

  // 注销
  logout() {
    alert('注销成功！！！');
    this.cookies.delete('message');
    this.router.navigateByUrl('login');
  }
}
