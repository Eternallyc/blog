import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Album, Picture} from '../album/album.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-albumcontent',
  templateUrl: './albumcontent.component.html',
  styleUrls: ['./albumcontent.component.css']
})
export class AlbumcontentComponent implements OnInit {

  date: string; // 当前日期
  username = ''; // 默认用户名为空
  avatar = '../../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
  content = '';
  reply = '';
  commentlist: AlbumcontentComment[];

  album: Album = new Album();
  albumid: string;
  picturelist: PhotoAlbumContent[];

  constructor(private http: HttpClient, private routeInfo: ActivatedRoute) {
    // 获取当前相册ID
    this.albumid = this.routeInfo.snapshot.paramMap.get('id');
    this.http.post('/blogs/photoalbum/getAllPicture', {'id': this.albumid})
      .subscribe((req) => {
        this.picturelist = req['picturelist']; // 得到所有图片
        this.album = req['currrentalbum']; // 得到当前相册信息
        this.commentlist = req['commentlist']; // 得到评论列表
      });
    // 图片预览
    $(function () {
      $('.piclistshow li').hover(function () {
        },
        function () {
        });
      $(document).keydown(function (event) {
        const key = event.keyCode;
        const firstdisplay = $('.firsttop').css('display');
        const enddisplay = $('.endtop').css('display');
        if (firstdisplay === 'none' && enddisplay === 'none') {
          if (key === 37) {
            preclick();
          } else {
            if (key === 39) {
              nextclick();
            }
          }
        } else {
          if (key === 27) {
            $('.firsttop').css('display', 'none');
            $('.bodymodal').css('display', 'none');
            $('.endtop').css('display', 'none');
          }
        }
      });

      const firstpic = $('.picmidmid ul li').first().find('img');
      const firstsrc = firstpic.attr('bigimg');
      const firsttxt = firstpic.attr('text');
      $('#pic1').attr('src', firstsrc);
      firstpic.addClass('selectpic');
      $('.picshowtxt_right').text(firsttxt);
      $('#preArrow').hover(function () {
          $('#preArrow_A').css('display', 'block');
        },
        function () {
          $('#preArrow_A').css('display', 'none');
        });
      $('#nextArrow').hover(function () {
          $('#nextArrow_A').css('display', 'block');
        },
        function () {
          $('#nextArrow_A').css('display', 'none');
        });
      const getli = $('.picmidmid ul li');

      function nextclick() {
        const currrentindex = parseFloat($('#pic1').attr('curindex'));
        const length = getli.length;
        if (currrentindex !== (length - 1)) {
          const curli = getli.eq(currrentindex);
          if (currrentindex > 3) {
            getli.eq(currrentindex - 4).css('display', 'none');
            getli.eq(currrentindex + 1).css('width', '106px').css('display', 'block');
          }
          const curnextli = getli.eq(currrentindex + 1);
          const curnextsrc = curnextli.find('img').attr('bigimg');
          const curnexttxt = curnextli.find('img').attr('text');
          curli.find('img').removeClass('selectpic');
          curnextli.find('img').addClass('selectpic');
          $('#pic1').attr('src', curnextsrc);
          $('#pic1').attr('curindex', currrentindex + 1);
          $('.picshowtxt_right').text(curnexttxt);
          $('.picshowtxt_left span').text(currrentindex + 2);
        } else {
          $('.bodymodal').css('display', 'block');
          $('.endtop').css('display', 'block');
        }
      }

      $('#nextArrow_B').click(function () {
        nextclick();
      });
      $('#nextArrow').click(function () {
        nextclick();
      });

      function preclick() {
        const currrentindex = parseFloat($('#pic1').attr('curindex'));
        if (currrentindex !== 0) {
          const curli = getli.eq(currrentindex);
          const length = getli.length;
          if (currrentindex <= (length - 5)) {
            getli.eq(currrentindex + 4).css('display', 'none');
            getli.eq(currrentindex - 1).css('width', '106px').css('display', 'block');
          }
          const curnextli = getli.eq(currrentindex - 1);
          const curnextsrc = curnextli.find('img').attr('bigimg');
          const curnexttxt = curnextli.find('img').attr('text');

          curli.find('img').removeClass('selectpic');

          curnextli.find('img').addClass('selectpic');

          $('#pic1').attr('src', curnextsrc);
          $('.picshowtxt_right').text(curnexttxt);
          $('#pic1').attr('curindex', currrentindex - 1);
          $('.picshowtxt_left span').text(currrentindex);
        } else {
          $('.bodymodal').css('display', 'block');
          $('.firsttop').css('display', 'block');
        }
      }

      $('#preArrow_B').click(function () {
        preclick();
      });
      $('#preArrow').click(function () {
        preclick();
      });
      getli.click(function () {
        const currentliindex = $(this).index('.picmidmid ul li');
        $('.picmidmid ul li img[class=\'selectpic\']').removeClass('selectpic');
        const currentli = getli.eq(currentliindex);
        currentli.find('img').addClass('selectpic');
        const bigimgsrc = currentli.find('img').attr('bigimg');
        const curnexttxt = currentli.find('img').attr('text');
        $('#pic1').attr('src', bigimgsrc);
        $('#pic1').attr('curindex', currentliindex);
        $('.picshowtxt_right').text(curnexttxt);
        $('.picshowtxt_left span').text(currentliindex + 1);
      });
      $('.piclistshow li').click(function () {
        const curli = $(this).index('.piclistshow li');
        showgaoqing();
        $('.picmidmid ul li img[class=\'selectpic\']').removeClass('selectpic');
        const currentli = getli.eq(curli);
        currentli.find('img').addClass('selectpic');
        const bigimgsrc = currentli.find('img').attr('bigimg');
        const curnexttxt = currentli.find('img').attr('text');
        $('#pic1').attr('src', bigimgsrc);
        $('#pic1').attr('curindex', curli);
        $('.picshowtxt_right').text(curnexttxt);
        $('.picshowtxt_left span').text(curli + 1);
        $('.picmidmid li').css('display', 'block');
        if (curli >= 5) {
          const cha = curli - 5;
          for (let i = 0; i <= cha; i++) {
            getli.eq(i).css('display', 'none');
          }
        }
      });
      setblock();

      function setblock() {
      }

      $(window).resize(function () {
        setblock();
      });
      $('.closebtn1').click(function () {
        $('.firsttop').css('display', 'none');
        $('.bodymodal').css('display', 'none');
      });
      $('.closebtn2').click(function () {
        $('.endtop').css('display', 'none');
        $('.bodymodal').css('display', 'none');
      });
      $('.replaybtn1').click(function () {
        $('.firsttop').css('display', 'none');
        $('.bodymodal').css('display', 'none');
      });
      $('.replaybtn2').click(function () {
        $('.endtop').css('display', 'none');
        $('.bodymodal').css('display', 'none');
        $('.detail_picbot_mid ul li img[class=\'selectpic\']').removeClass('selectpic');
        $('.detail_picbot_mid ul li').eq(0).find('img').addClass('selectpic');
        const bigimgsrc = $('.detail_picbot_mid ul li').eq(0).find('img').attr('bigimg');
        $('#pic1').attr('src', bigimgsrc);
        $('#pic1').attr('curindex', 0);
      });
      $('.list').click(function () {
        $('.picshow').css('display', 'none');
        $('.piclistshow').css('display', 'block');
        $('.source_right').css('display', 'none');
        $('.source_right1').css('display', 'block');
      });
      $('.gaoqing').click(function () {
        showgaoqing();
      });

      function showgaoqing() {
        $('.picshow').css('display', 'block');
        $('.piclistshow').css('display', 'none');
        $('.source_right').css('display', 'block');
        $('.source_right1').css('display', 'none');
      }

      $('.rank ul').first().css('display', 'block');

    });
  }

  ngOnInit() {
  }

  pointlike() {
    this.http.post('/blogs/photoalbum/pointlike', {'id': this.albumid})
      .subscribe((req) => {
        this.album = req['currrentalbum'];
        alert('点赞成功!');
      });
  }

  myFun(obj) {
    $('#Avatar').find('img').css({'opacity': '0.5'});
    document.getElementById(obj).style.opacity = '1';
    this.avatar = document.getElementById(obj).getAttribute('src');
  }

  // 得到输入的用户名
  doOnInput(event) {
    this.username = event.target.value;
  }

  // 得到评论内容
  doOnInputContent(event) {
    this.content = event.target.value;
  }

  onsubmit() {
    if (this.username === '') {
      alert('请输入用户名');
      event.preventDefault();
      return;
    }
    if (this.content === '') {
      alert('请输入评论内容');
      event.preventDefault();
      return;
    }
    event.preventDefault();

    this.http.post('/blogs/photoalbum/commentcurrent', {
      'albumid': this.albumid, 'username': this.username, 'avatar': this.avatar, 'content': this.content
      , 'time': this.date, 'reply': this.reply
    })
      .subscribe((req) => {
        this.commentlist = req['commentlist'];
        alert('发表留言成功');
        this.username = '';
        this.avatar = '../../../../../../assets/images/tx1.jpg'; // 默认头像为第一个
        this.content = '';
        this.reply = '';
      });
  }
}

export class PhotoAlbumContent {
  photoalbum_id: number;
  picture: Picture;
}

export class AlbumcontentComment {
  id: string;
  photoalbum_id: string;
  username: string;
  avatar: string;
  content: string;
  time: string;
  reply: string;
}
