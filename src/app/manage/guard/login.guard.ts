import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

/**
 * 路由守卫
 */
@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router, private http: HttpClient,  private cookie: CookieService) {

  }

  canActivate() {
    /*alert(this.cookie.get('message'));*/
    if (this.cookie.get('message') === '') {

      alert('你还没有登录,请登录后重试！');
      this.router.navigateByUrl('login');
      return false;
    }
    return true;
  }

}
