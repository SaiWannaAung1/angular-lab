import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {PostComponent} from './components/post/post.component';
import {ViewPostComponent} from './components/post/view-post/view-post.component';
import {InsertPostComponent} from './components/post/insert-post/insert-post.component';
import {ReactiveFormComponent} from './components/reactive-form/reactive-form.component';
import {PipesComponent} from './components/pipes/pipes.component';
import {ResponsiveComponent} from './components/responsive/responsive.component';



export const routes: Routes = [
  {
    path: '', component: PostComponent,
    children: [
      {path: 'view-post',     component: ViewPostComponent},
      // {path: 'view-post',     loadComponent: () => import('./post/view-post/view-post.component').then(c => c.ViewPostComponent)
      // },
      {path: 'insert-post', component: InsertPostComponent},
      ]
  },
  {path: 'reactiveForm-vald', component: ReactiveFormComponent},
  {path: 'post', component: AppComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'responsive', component: ResponsiveComponent},
];
