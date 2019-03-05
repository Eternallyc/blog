import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  title = '';
  content = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('/blogs/article/aboutme')
      .subscribe((req) => {
        this.title = req['title'];
        this.content = req['content'];
      });

  }

}
