import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Classification} from '../../../blog/content/leftsides/leftside/leftside.component';
import {Title} from '@angular/platform-browser';

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

  classificationlist: Classification[]; // 所有分类列表
  classificationlistreadnum: number[]; // 获取所有分类的阅读量
  classificationlistlikenum: number[]; // 获取所有分类的点赞量
  classificationlistcommentnum: number[]; // 获取所有分类的评论量

  classificationlistname: string[] = []; // 获得所有分类名


  options = TREE_OPTION;
  mergeData = null;

  options1 = TREE_OPTION1;
  mergeData1 = null;

  constructor(private http: HttpClient, private cookies: CookieService,
              private titleService: Title) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this.cookies.get('message')
      })
    };

    titleService.setTitle('数据展示');
  }

  ngOnInit() {
    this.http.get('/blogs/admin/dateShow', this.httpOptions)
      .subscribe((req) => {
        this.allreadnum = req['readnum']; // 总阅读量
        this.allcommentnum = req['commentnum']; // 总评论量
        this.alllikenum = req['likenum']; // 总点赞量
        this.allleavemessagenum = req['leavemessagenum']; // 总留言量
        this.classificationlist = req['classificationlist']; // 所有分类列表
        this.classificationlistreadnum = req['classificationlistreadnum']; // 获取所有分类的阅读量
        this.classificationlistlikenum = req['classificationlistlikenum'];  // 获取所有分类的点赞量
        this.classificationlistcommentnum = req['classificationlistcommentnum']; // 获取所有分类的评论量
        for (let i = 0; i < this.classificationlist.length; i++) {
          this.classificationlistname[i] = this.classificationlist[i].name;
        }
        let maxnum = 0;
        for (let i = 0; i < this.classificationlistreadnum.length; i++) {
          if (maxnum < this.classificationlistreadnum[i]) {
            maxnum = this.classificationlistreadnum[i];
          }
        }
        for (let i = 0; i < this.classificationlistlikenum.length; i++) {
          if (maxnum < this.classificationlistlikenum[i]) {
            maxnum = this.classificationlistlikenum[i];
          }
        }
        let maxnum1 = 0;
        for (let i = 0; i < this.classificationlistcommentnum.length; i++) {
          if (maxnum1 < this.classificationlistcommentnum[i]) {
            maxnum1 = this.classificationlistcommentnum[i];
          }
        }
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
              magicType: {show: true, type: ['line', 'bar']},
              restore: {show: true},
              saveAsImage: {show: true},
            }, x: '79%'
          },
          legend: {
            data: ['阅读量', '点赞量', '评论量']
          },
          xAxis: [
            {
              type: 'category',
              data: this.classificationlistname,
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
              max: maxnum + 100,
              interval: Math.round((maxnum + 100) / this.classificationlistlikenum.length),
              axisLabel: {
                formatter: '{value}'
              }
            },
            {
              type: 'value',
              name: '评论数量',
              min: 0,
              max: maxnum1 + 5,
              interval: Math.round((maxnum + 5) / this.classificationlistcommentnum.length),
              axisLabel: {
                formatter: '{value} '
              }
            }
          ],
          series: [
            {
              name: '阅读量',
              type: 'bar',
              data: this.classificationlistreadnum
            },
            {
              name: '点赞量',
              type: 'bar',
              data: this.classificationlistlikenum
            },
            {
              name: '评论量',
              type: 'line',
              yAxisIndex: 1,
              data: this.classificationlistcommentnum
            }
          ]
        };

        const TREE_DATA_1 = {
          'name': '博客',
          'children': req['blogmap']
        };
        const TREE_DATA_2 = {
          'name': '相册',
          'children': req['albumlist']
        };

        // 博客分类图
        TREE_OPTION.series[0].data = [TREE_DATA_1];

        this.mergeData = {
          series: TREE_OPTION.series
        };


        // 相册图
        TREE_OPTION1.series[0].data = [TREE_DATA_2];

        this.mergeData1 = {
          series: TREE_OPTION1.series
        };

      });

  }

}

const TREE_OPTION = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [{
      name: '博客',
      icon: 'rectangle',
    }],
    borderColor: '#c23531'
  },
  series: [
    {
      type: 'tree',
      name: '博客',
      data: [],
      top: '15%',
      left: '7%',
      bottom: '2%',
      right: '60%',
      symbolSize: 7,
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },
      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },
      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750

    }
  ]
};


const TREE_OPTION1 = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [
      {
        name: '相册',
        icon: 'rectangle'
      }],
    borderColor: '#c23531'
  },
  series: [
    {
      type: 'tree',
      name: '相册',
      data: [],
      top: '15%',
      left: '7%',
      bottom: '22%',
      right: '18%',

      symbolSize: 7,

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right'
        }
      },

      leaves: {
        label: {
          normal: {
            position: 'right',
            verticalAlign: 'middle',
            align: 'left'
          }
        }
      },

      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};
