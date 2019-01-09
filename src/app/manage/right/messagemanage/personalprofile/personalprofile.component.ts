import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {ActivatedRoute} from '@angular/router';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-personalprofile',
  templateUrl: './personalprofile.component.html',
  styleUrls: ['./personalprofile.component.css',
    '../../../../../assets/css/bootstrap.css',
    '../../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../../assets/css/animate.css',
    '../../../../../assets/css/style.css']
})
export class PersonalprofileComponent implements OnInit {
  name = '';
  introduction = '';
  avatar = '';
  httpOptions: any;


  constructor(private http: HttpClient, private cookies: CookieService, private routeInfo: ActivatedRoute) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };


  }

  uploader: FileUploader = new FileUploader({
    url: 'blogs/uploadClient',
    method: 'POST',
    itemAlias: 'avatar',
    autoUpload: false
  });

  /**
   * 上传文件内容变化时执行的方法
   * 上传文件方法
   * @param event
   */
  selectedFileOnChanged(event: any) {
    console.log(event.target.value);
    console.log(event);
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status === 200) {
        alert('上传成功！！');
      } else {
        alert('上传失败');
      }

    };
    this.uploader.queue[0].upload(); // 开始上传
    window.location.reload();
  }

  ngOnInit() {
    this.http.get('/blogs/admin/getNameAndIntroduction', this.httpOptions).subscribe((req) => {
      this.name = req['name'];
      this.introduction = req['introduction'];
      this.avatar = req['avatar'];
    });


  }

  // 修改资料
  change() {
    if (this.name === '') {
      alert('请输入呢称！！！');
      return;
    }
    if (this.introduction === '') {
      alert('请输入个人简介！！！');
      return;
    }
    const r = confirm('确认保存吗？');
    if (r === true) {
      this.http.post('/blogs/admin/saveNameAndIntroduction', {
        'name': this.name,
        'introduction': this.introduction
      }, this.httpOptions).subscribe((req) => {
        alert('修改成功！');
        window.location.reload();
      });
    }
  }

  doOnInput(obj) {
    this.name = obj;
  }

  doOnInputTroduction(obj) {
    this.introduction = obj;
  }

}
