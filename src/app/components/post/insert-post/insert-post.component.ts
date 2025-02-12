import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Post} from '../../../models/post.model';


@Component({
  selector: 'app-insert-post',
  templateUrl: './insert-post.component.html',
  imports: [
    ReactiveFormsModule,
    FormsModule
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
