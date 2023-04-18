import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'http'
})
export class HttpPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.replace('http', 'https');
  }

}
