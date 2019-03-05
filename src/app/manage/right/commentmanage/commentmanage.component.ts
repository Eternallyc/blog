import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-commentmanage',
  templateUrl: './commentmanage.component.html',
  styleUrls: ['./commentmanage.component.css']
})
export class CommentmanageComponent implements OnInit {

  uploader2: FileUploader;
  content: any;
  URL: any;

  constructor() {
    this.uploader2 = new FileUploader({
      url: this.URL
      , method: 'POST'
      , itemAlias: 'upfile'
      , autoUpload: true
    });
    this.uploader2.onSuccessItem = function (item, response, status, headers) {
      if (status === 200) {
        const rsp = JSON.parse(response);
        const img = '<img class="camera" src="' + 'http://您的域名' + rsp.url + '" alt="">';
        this.content += img;
      }
    };
  }

  ngOnInit() {
  }

}
