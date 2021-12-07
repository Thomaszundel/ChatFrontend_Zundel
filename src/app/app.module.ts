import { ProductService } from './product.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LandingComponent } from './landing/landing.component';



import { ChannelComponent } from './Channel/Channel.component';
import { ChannelPostsComponent } from './ChannelPosts/ChannelPosts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCreateComponent } from './post-create/post-create.component';


@NgModule({
  declarations: [							
    AppComponent,
      LandingComponent,
      
      ChannelComponent,
      ChannelPostsComponent,
      PostCreateComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
