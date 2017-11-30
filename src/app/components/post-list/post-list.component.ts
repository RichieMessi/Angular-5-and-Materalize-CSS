import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Post } from '../../models/Post';
import { port } from '_debugger';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts:Post[];

  constructor(public dataService: DataService) {
    
   }

  ngOnInit() {

    this.posts = this.dataService.getPosts();
  } 

  addPost(post: Post){
    // console.warn(post)
    this.dataService.addPost(post)
  }


}
