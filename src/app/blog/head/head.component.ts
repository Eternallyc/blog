import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const As = document.getElementById('starlist').getElementsByTagName('a');
    let obj = As[0];
    for (let i = 1; i < As.length; i++) {
      obj.id = '';
      if (window.location.href.indexOf(As[i].getAttribute('title')) >= 0) {
      obj = As[i];
      break;
    }}
    obj.id = 'selected';

    let new_scroll_position = 0;
    let last_scroll_position;
    const header = document.getElementById('header');

    window.addEventListener('scroll', function(e) {
      last_scroll_position = window.scrollY;
      if (new_scroll_position < last_scroll_position && last_scroll_position > 80) {
        header.classList.remove('slideDown');
        header.classList.add('slideUp');
      } else if (new_scroll_position > last_scroll_position) {
        header.classList.remove('slideUp');
        header.classList.add('slideDown');
      }

      new_scroll_position = last_scroll_position;
    });

    const offset = 300,

      offset_opacity = 1200,

      scroll_top_duration = 700,

      $back_to_top = $('.cd-top');

    $(window).scroll(function () {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
        $back_to_top.addClass('cd-fade-out');
      }
    });
    $back_to_top.on('click', function (event) {
      event.preventDefault();
      $('body,html').animate({
          scrollTop: 0,
        }, scroll_top_duration
      );
    });
  }

  change(id) {
    const As = document.getElementById('starlist').getElementsByTagName('a');
    for (let i = 0; i < As.length; i++) {
 As[i].id = '';
    }
    As[id - 1].id = 'selected';
  }
}
