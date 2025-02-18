import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Post} from '../../../models/post.model';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-insert-post',
  templateUrl: './insert-post.component.html',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    NgForOf
  ],
  styleUrl: './insert-post.component.scss'
})
export class InsertPostComponent {
  submitForm(userForm:Post ) {
    Object.entries(userForm).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    }); // Handle form submission
  }

}
