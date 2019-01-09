import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-manageletfside',
  templateUrl: './manageletfside.component.html',
  styleUrls: ['./manageletfside.component.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../assets/css/animate.css',
    '../../../../assets/css/style.css']
})
export class ManageletfsideComponent implements OnInit {
avatar = '';
  httpOptions: any;
  constructor(private http: HttpClient, private cookies: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };
    this.http.get('/blogs/admin/getNameAndIntroduction', this.httpOptions).subscribe((req) => {
      this.avatar = req['avatar'];
    });
  }

  ngOnInit() {
    const lis = document.getElementById('side-menu').getElementsByTagName('li');
    for (let i = 1; i < lis.length; i++) {
      lis[i].className = '';
      if (window.location.href.indexOf(lis[i].getAttribute('title')) >= 0) {
        lis[i].className = 'active';
        if (i === 3 || i === 4 || i === 5) {
          document.getElementById('messagemanage').style.display = 'block';
          document.getElementById('2').className = 'active';
        } else if (i === 7 || i === 8) {
          document.getElementById('blogmanage').style.display = 'block';
          document.getElementById('3').className = 'active';
        }
      }

    }
  }

  change(obj) {
    if (obj === 2 && document.getElementById(obj.toString()).className === 'active') {
      if (document.getElementById('messagemanage').style.display === 'block') {
        document.getElementById('messagemanage').style.display = 'none';
      } else {
        document.getElementById('messagemanage').style.display = 'block';
      }
      return;
    }
    if (obj === 3 && document.getElementById(obj.toString()).className === 'active') {
      if (document.getElementById('blogmanage').style.display === 'block') {
        document.getElementById('blogmanage').style.display = 'none';
      } else {
        document.getElementById('blogmanage').style.display = 'block';
      }
      return;
    }
    if (obj === 5 && document.getElementById(obj.toString()).className === 'active') {
      if (document.getElementById('commentmanage').style.display === 'block') {
        document.getElementById('commentmanage').style.display = 'none';
      } else {
        document.getElementById('commentmanage').style.display = 'block';
      }
      return;
    }
    for (let a = 1; a < 15; a++) {
      document.getElementById(a.toString()).className = '';
      if (a === 2) {
        document.getElementById('messagemanage').style.display = 'none';
      } else if (a === 3) {
        document.getElementById('blogmanage').style.display = 'none';
      } else if (a === 5) {
        document.getElementById('commentmanage').style.display = 'none';
      }
    }
    document.getElementById(obj.toString()).className = 'active';

    if (obj === 2) {
      document.getElementById('messagemanage').style.display = 'block';
    } else if (obj === 3) {
      document.getElementById('blogmanage').style.display = 'block';
    } else if (obj === 5) {
      document.getElementById('commentmanage').style.display = 'block';
    }


  }

}
