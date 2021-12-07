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
    
   
  }
}
   
  


