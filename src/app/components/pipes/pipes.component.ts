import { Component } from '@angular/core';
import {AsyncPipe, CurrencyPipe, I18nSelectPipe, NgForOf, PercentPipe, SlicePipe, UpperCasePipe} from '@angular/common';
import {of} from 'rxjs';

@Component({
  selector: 'app-pipes',
  imports: [
    PercentPipe,
    UpperCasePipe,
    CurrencyPipe,
    SlicePipe,
    I18nSelectPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  gender = 'male';
  genderMap = {
    female: 'She',
    male: 'He',
    other: 'They'
  };
}
