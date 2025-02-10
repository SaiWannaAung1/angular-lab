import { Routes } from '@angular/router';
import {PostComponent} from './post/post.component';
import {InsertPostComponent} from './post/insert-post/insert-post.component';
import {AppComponent} from './app.component';


export const routes: Routes = [
  {
    path: '', component: PostComponent,
    children: [
      // {path: 'view-post',     component: ViewPostComponent
      // },
      {path: 'view-post',     loadComponent: () => import('./post/view-post/view-post.component').then(c => c.ViewPostComponent)
      },
      {path: 'insert-post', component: InsertPostComponent},
      ]
  },
  {path: 'post', component: AppComponent},
];
