import { Component, OnInit } from '@angular/core';

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

  constructor() {

  }

  ngOnInit() {
    const lis = document.getElementById('side-menu').getElementsByTagName('li');
    for (let i = 1; i < lis.length; i++) {
      lis[i].className = '';
      if (window.location.href.indexOf(lis[i].getAttribute('title')) >= 0) {
        lis[i].className = 'active';
        if (i === 3 || i === 4 || i === 5) {
          document.getElementById('blogmanage').style.display = 'block';
          document.getElementById('2').className = 'active';
        }
      }

    }
  }
  change(obj) {

    if (obj === 2 && document.getElementById(obj.toString()).className === 'active') {
      if (document.getElementById('blogmanage').style.display === 'block') {
        document.getElementById('blogmanage').style.display = 'none';
      } else {
        document.getElementById('blogmanage').style.display = 'block';
      }
      return ;
    }
    for (let a = 1; a < 8; a ++) {
      document.getElementById(a.toString()).className = '';
      if (a === 2) {
        document.getElementById('blogmanage').style.display = 'none';
      }
    }
    document.getElementById(obj.toString()).className = 'active';
    if (obj === 2) {
      document.getElementById('blogmanage').style.display = 'block';
    }
    const lis = document.getElementById('side-menu').getElementsByTagName('li');
    for (let i = 1; i < lis.length; i++) {
      lis[i].className = '';
    }
    if (obj === 8 || obj === 9 ) {
      document.getElementById('2').className = 'active';
    }
    document.getElementById(obj.toString()).className = 'active';
  }
}
