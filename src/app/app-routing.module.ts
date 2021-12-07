import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ChannelPostsComponent } from './ChannelPosts/ChannelPosts.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {path: 'post/create', component: PostCreateComponent},
  {path: 'post/:channel', component: ChannelPostsComponent},
  
  {path: '',component:LandingComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
