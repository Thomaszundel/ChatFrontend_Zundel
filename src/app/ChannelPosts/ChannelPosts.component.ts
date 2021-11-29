import { Component, Input, OnInit } from '@angular/core';
import { Post, ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ChannelPosts',
  templateUrl: './ChannelPosts.component.html',
  styleUrls: ['./ChannelPosts.component.scss']
})
export class ChannelPostsComponent implements OnInit {

  @Input() data:Post[] = [];

  constructor(private channel: ProductService,private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.channel.getChannelPosts(params['channel']).subscribe(data => {
        console.log("data info", data)
        this.data = data;
      })
    })
  }

}
