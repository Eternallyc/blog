import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  albumList: Album[];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/blogs/photoalbum/getalllist')
      .subscribe((req) => {
        this.albumList = req['photoAlbumList'];
      });

  }

}
export class Album {
  photoalbum_id: number;
  title: string;
  troduction: string;
  time: string;
  picture: Picture;
  read_number: number;
  like_number: number;
}
export class Picture {
  picture_id: number;
  picture_url: string;
}
