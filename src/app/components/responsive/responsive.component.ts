import { Component } from '@angular/core';
import {NgForOf, SlicePipe} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-responsive',
  imports: [
    SlicePipe,
    RouterLink,
    NgForOf
  ],
  templateUrl: './responsive.component.html',
  styleUrl: './responsive.component.scss'
})
export class ResponsiveComponent {
  menuItems = [
    { label: 'Home', link: '/' },
    { label: 'Blog', link: '/blog' },
    { label: 'About', link: '/about' }
  ];
  blogPosts= [
    { title: 'First Post', content: 'Content for first post...', imageUrl: 'path_to_image.jpg' },
    { title: 'Second Post', content: 'Content for second post...', imageUrl: 'path_to_image2.jpg' }
  ];
}
