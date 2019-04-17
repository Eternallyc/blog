import {Component, OnInit} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import {RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-leavemessagemanage',
  templateUrl: './leavemessagemanage.component.html',
  styleUrls: ['./leavemessagemanage.component.css']
})
export class LeavemessagemanageComponent implements OnInit {

  content = '';

  constructor(private http: HttpClient) {

  }

  uploader: FileUploader = new FileUploader({
    url: 'blogs/picture/uploadClient'
    , method: 'POST'
    , itemAlias: 'article_image'
    , autoUpload: true
  });

  ngOnInit() {
    this.uploader.onSuccessItem =  (item, response, status, headers) => {
      if (status === 200) {
        const img = '<img  src="' + response.split('?')[0] + '" ' +
          'width="50px;"height="50px;">';
        console.log(img)
        this.content += img;
      }
    };

  }

}
