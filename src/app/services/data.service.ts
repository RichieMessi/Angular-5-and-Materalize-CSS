import { Injectable } from '@angular/core';
import { Post } from '../models/Post';


@Injectable()
export class DataService {

  posts: Post[];

  constructor() {
    // this.posts = [
    //   {
    //     post: 'Dummy Post Content',
    //     author: 'Dummy First Name',
    //     hide: true
    //   },
    //   {
    //     post: 'Some Blog Post',
    //     author: 'Peter Jones',
    //     hide: true
    //   },
    //   {
    //     post: 'Personal Story',
    //     author: 'Jane Smith',
    //     hide: true
    //   }
    // ]
   }

   getPosts(){
     if(localStorage.getItem('posts') === null){
        this.posts = [];
     } else {
        this.posts = JSON.parse(localStorage.getItem('posts'))
     }
     return this.posts;
   }




   addPost(post: Post){
      this.posts.unshift(post);

      // init local variable 
      let posts;

      if(localStorage.getItem('posts') === null){
        posts = [];

        // Push new posts
        posts.unshift(post);
        
        // Set new array to local storage
        localStorage.setItem('posts', JSON.stringify(posts))
     } else {

      posts = JSON.parse(localStorage.getItem('posts'));

      // Add new posts
      posts.unshift(post);


      // Reset localstorage
      localStorage.setItem('posts', JSON.stringify(posts))


        // this.posts = JSON.parse(localStorage.getItem('posts'));
     }
   }




   removePost(post:Post){
     for(var i = 0; i < this.posts.length; i++){
       if(post === this.posts[i]){
         this.posts.splice(i,1);
         localStorage.setItem('posts', JSON.stringify(this.posts));
       }
     }
   }

}
