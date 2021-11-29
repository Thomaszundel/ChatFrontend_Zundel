import { Component, OnInit } from '@angular/core';
import { Post, ProductService } from '../product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  data: any[] = [];
  
  posts: any[] = [];

  messages: Post[] = [];


  
  constructor(private products: ProductService) { }

  ngOnInit() {
    

    this.products.getAllPosts().subscribe(data =>{
      console.log(data);
      this.posts = data;

    });
    
    //I was trying to get my page to route to each chat channel but was unsuccessful
    //I got it really close but ended up just doing the simple fix and just outputting my single channel
    //using this method my Channel and ChannelPosts moduals dont do much but i left them in so you could see what i was going for 
    
    this.products.getChannelPosts("tzundel").subscribe(data => {

      console.log(data);
      this.messages = data;

    });
  }
}
   
  


