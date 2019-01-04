import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'keyword'
})
@Injectable()
export class SearchkeywordPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(val: string, keyword: string): any {
    const Reg = new RegExp(keyword, 'g');
    if (val) {
      const res = val.replace(Reg, `<a style="color: #ff2424;">${keyword}</a>`);
      console.log(res);
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }

}
