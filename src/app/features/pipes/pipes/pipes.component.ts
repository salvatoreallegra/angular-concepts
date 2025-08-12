import { Component } from '@angular/core';
import {
  DatePipe,
  CurrencyPipe,
  DecimalPipe,
  PercentPipe,
  UpperCasePipe,
  LowerCasePipe,
  TitleCasePipe,
  SlicePipe,
  JsonPipe,
} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-pipes',
  imports: [
    DatePipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './pipes.component.html',
})
export class PipesComponent {
  price = 1234.56;
  ratio = 0.34567;
  qty = 9876.54321;
  today = new Date();
  text = 'hello world from angular';
  list = ['alpha', 'beta', 'gamma', 'delta', 'epsilon'];
  obj = { id: 42, name: 'Widget', tags: ['a', 'b'] };
}
