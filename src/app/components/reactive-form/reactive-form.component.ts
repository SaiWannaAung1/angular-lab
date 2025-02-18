import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf
  ],
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
