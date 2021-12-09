import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup = this.fb.group({
    title:['',Validators.required],
    body:['',Validators.required]
  })

  constructor(private post: ProductService, private fb: FormBuilder) {
    this.initForm();
   }

  initForm(): void{
    this.postForm = this.fb.group({
      title:['',Validators.required],
      body:['',Validators.required]
    })
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
