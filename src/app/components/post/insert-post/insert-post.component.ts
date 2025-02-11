import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
  submitForm(userForm:any ) {
    console.log(userForm.value); // Handle form submission
  }
}
