import { Component } from '@angular/core';
import {CurrencyPipe, PercentPipe, SlicePipe, UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [
    PercentPipe,
    UpperCasePipe,
    CurrencyPipe,
    SlicePipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {

}
