import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-view-post',
  imports: [
    NgForOf
  ],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.scss'
})
export class ViewPostComponent implements OnInit{
  data:any;
  constructor(private http: HttpClient) {}
  fetchData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(response => {
        this.data = response;
      });

  }

  ngOnInit(): void {
    this.fetchData();
  }
}
