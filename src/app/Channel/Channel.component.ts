import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-Channel',
  templateUrl: './Channel.component.html',
  styleUrls: ['./Channel.component.scss']
})
export class ChannelComponent implements OnInit {

  @Input() channel: string="";

  constructor(private channels:ProductService) { }

  ngOnInit() {
  }

}
