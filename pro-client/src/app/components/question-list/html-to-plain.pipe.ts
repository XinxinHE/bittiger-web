import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'htmlToPlainText'})
export class HtmlToPlainTextPipe implements PipeTransform {
  transform(text: any) {
    return text ? String(text).replace(/<[^>]+>/gm, '') : '';
  }
}