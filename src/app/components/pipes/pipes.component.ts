import { Component } from '@angular/core';
import {AsyncPipe, CurrencyPipe, PercentPipe, SlicePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [
    PercentPipe,
    UpperCasePipe,
    CurrencyPipe,
    SlicePipe,
    AsyncPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  data$ = of('Hello, World!');
}
