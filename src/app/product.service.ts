import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

export interface Post{
  username: string,
  message: string,
  id: string,
  created_on: Date,
  updated_on: Date
}



@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private webUrl = "http://73.19.65.35:3500/api/channel";

constructor(private http:HttpClient) { }



//create
createPost(channel: Post): Observable<Post> {
  return this.http.post<Post>(`${this.webUrl}/post`,channel);
}
//read all
getAllPosts(): Observable<string[]> {
  console.log("get all posts fired");
  return this.http.get<string[]>(`${this.webUrl}`);
}
getChannelPosts(channel:string):Observable<any>{
  console.log("get channel posts fired")
  return this.http.get<any>(`${this.webUrl}/${channel}`)
}
//update
patchPost(channel: Post): Observable<Post> {
  return this.http.patch<Post>(`${this.webUrl}`,channel);
}
//delete
 deletePost(channel: Post): Observable<Post> {
   return this.http.delete<Post>(`${this.webUrl}/${channel}`)
 }




}
