import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {
    path:'learn',
    component:LearnComponent,
  },
  {
    path:'about',
    component: AboutComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
