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

  constructor() { }

  ngOnInit() {
    const As = document.getElementById('side-menu').getElementsByTagName('a');
    const lis = document.getElementById('side-menu').getElementsByTagName('li');
    let obj = As[0];
    let locate = 0;
    for (let i = 1; i < As.length; i++) {
      obj.id = '';
      lis[i].className = '';
      if (window.location.href.indexOf(As[i].href) >= 0) {
        obj = As[i];
        locate = i;
      }}
      lis[locate].className = 'active';
  }
}
