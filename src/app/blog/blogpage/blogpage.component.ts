import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  constructor() {
   /* /!* 鼠标点击特效  *!/
    let a_idx = 0;
    jQuery(document).ready(function ($) {
      $('body').click(function (e) {
        const a = new Array('富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善');
        const $i = $('<span/>').text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        const x = e.pageX, y = e.pageY;
        $i.css({'z-index': 100000000, 'top': y - 20, 'left': x, 'position': 'absolute', 'font-weight': 'bold', 'color': '#ff6651'});
        $('body').append($i);
        $i.animate({'top': y - 180, 'opacity': 0}, 1500, function () {
          $i.remove();
        });
      });
    });*/
  }

  ngOnInit() {

  }
}
