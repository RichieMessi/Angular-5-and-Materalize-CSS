import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  @Output() postAdded = new EventEmitter<Post>();

  post: string;
  author: string;

  constructor() { }

  ngOnInit() {

  }

  addPost() {
    // this.postAdded.emit({post:this.post, author:this.author, hide: true})
    this.postAdded.emit({post: this.post, author: this.author, hide: true})
  }

}
