import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup = new FormGroup({});

  constructor(private post: ProductService) {
    this.initForm();
   }

  initForm(): void{
    this.postForm = new FormGroup({
      title: new FormControl('username here'),
      body: new FormControl('message here')
    });
  }

  ngOnInit() {
  }
  
  onSubmit(){
    console.log("Form Submission",this.postForm);
    let newPost = {
      username: this.postForm.value.title,
      message: this.postForm.value.body,
      id: "",
      created_on: new Date,
      updated_on: new Date

    }
    this.post.createPost(newPost).subscribe(data=>{
      console.log(data);
      this.initForm();
    })
  }

}
