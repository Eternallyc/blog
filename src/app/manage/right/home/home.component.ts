import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../../../assets/css/bootstrap.css',
    '../../../../assets/css/font-awesome/css/font-awesome.css',
    '../../../../assets/css/animate.css',
    '../../../../assets/css/style.css']
})
export class HomeComponent implements OnInit {
  read: any; // 博客阅读量饼状图
  classification: any; // 分类详情
  classificationtree: any; // 分类详情树
  readrank10: any; // 博客阅读量前10和总量相比
  album: any; // 相册阅读量饼状图
  httpOptions: any;

  allreadnum: number; // 总阅读量
  allcommentnum: number; // 总评论量
  alllikenum: number; // 总点赞量
  allleavemessagenum: number; // 总留言量
  constructor( private http: HttpClient, private cookies: CookieService) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };
    this.classification = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        }
      },
      legend: {
        data: ['访问量', '阅读量', '评论量']
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '数量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value}'
          }
        },
        {
          type: 'value',
          name: '数量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} '
          }
        }
      ],
      series: [
        {
          name: '访问量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
          name: '阅读量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '评论量',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };

    this.http.get('/blogs/admin/dateShow', this.httpOptions)
      .subscribe((req) => {
      this.allreadnum = req['readnum'];
      this.allcommentnum = req['commentnum'];
      this.alllikenum = req['likenum'];
      this.allleavemessagenum = req['leavemessagenum'];
      });

  }

  ngOnInit() {
  }

}
