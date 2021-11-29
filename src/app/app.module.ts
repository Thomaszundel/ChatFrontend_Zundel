import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';


import { ProductService } from './product.service';

import { ChannelComponent } from './Channel/Channel.component';
import { ChannelPostsComponent } from './ChannelPosts/ChannelPosts.component';


@NgModule({
  declarations: [							
    AppComponent,
      LandingComponent,
      
      ChannelComponent,
      ChannelPostsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
