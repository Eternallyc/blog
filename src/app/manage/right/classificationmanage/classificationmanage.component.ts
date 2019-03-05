import {Component, OnInit} from '@angular/core';
import {Classification} from '../../../blog/content/leftsides/leftside/leftside.component';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-classificationmanage',
  templateUrl: './classificationmanage.component.html',
  styleUrls: ['./classificationmanage.component.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../assets/css/animate.css',
    '../../../../assets/css/style.css']
})
export class ClassificationmanageComponent implements OnInit {
  classificationlist: Classification[];
  classname = '';
  isvisiableclass = ['label label-default', 'label label-primary'];
  isvisiable = ['隐藏', '显示'];
  httpOptions: any;
  constructor(private http: HttpClient, private cookies: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };
    this.http.get('/blogs/classification/admin/getAllClassificationList', this.httpOptions)
      .subscribe((req) => {
        this.classificationlist = req['list'];
      });

  }

  ngOnInit() {
  }

  doOnInput(event) {
    this.classname = event.target.value;
  }

  add() {
    this.http.post('/blogs/classification/admin/addNewClassification', {'name': this.classname}, this.httpOptions)
      .subscribe((req) => {
        this.classificationlist = req['list'];
      });
  }

  change(id, isvisible) {
    if (isvisible === 0) {
      const r = confirm('请确认是否显示');
      if (r === false) {
        return;
      } else {
        this.http.post('/blogs/classification/admin/updateState', {'id': id, 'isvisiable': 1}, this.httpOptions)
          .subscribe((req) => {
            this.classificationlist = req['list'];
          });
      }
    } else if (isvisible === 1) {
      const r = confirm('请确认是否隐藏');
      if (r === false) {
        return;
      }
      {
        this.http.post('/blogs/classification/admin/updateState', {'id': id, 'isvisiable': 0}, this.httpOptions)
          .subscribe((req) => {
            this.classificationlist = req['list'];
          });
      }
    }
  }

  delete(id) {
    const r = confirm('请确认是否删除');
    if (r === false) {
      return;
    } else {
      this.http.post('/blogs/classification/admin/deleteClassification', {'id': id}, this.httpOptions)
        .subscribe((req) => {
          this.classificationlist = req['list'];
        });
    }
  }
  // 保存修改
  save(id) {
    const tr = document.getElementById('classification' + id);
    this.http.post('/blogs/classification/admin/updateClasssification', {'id': id, 'name': tr.getElementsByTagName('input')[0].value}, this.httpOptions)
      .subscribe((req) => {
        this.classificationlist = req['list'];
      });
    tr.getElementsByTagName('div')[0].style.display = 'none';
    tr.getElementsByTagName('a')[0].style.display = 'inline';
  }
  // 取消修改
  cancel(obj) {
    const tr = document.getElementById('classification' + obj);
    tr.getElementsByTagName('input')[0].value = this.classificationlist[obj - 1].name;
    tr.getElementsByTagName('div')[0].style.display = 'none';
    tr.getElementsByTagName('a')[0].style.display = 'inline';
  }
  // 编辑
  edit1(obj) {
    const tr = document.getElementById('classification' + obj);
    tr.getElementsByTagName('div')[0].style.display = 'inline';
    tr.getElementsByTagName('a')[0].style.display = 'none';
  }
}
