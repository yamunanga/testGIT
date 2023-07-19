import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundDecimal'
})
export class RoundDecimalPipe implements PipeTransform {
  transform(value: number, decimalPlaces: number): number {
    const factor = 10 ** decimalPlaces;
    return Math.round(value * factor) / factor;
  }
}
