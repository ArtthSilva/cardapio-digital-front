import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDecimal'
})
export class ReplaceDecimalPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace('.', ',');
  }
}
