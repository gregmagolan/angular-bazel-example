import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'ngConf'})
export class NgConfPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('World', 'ngConf');
  }
}