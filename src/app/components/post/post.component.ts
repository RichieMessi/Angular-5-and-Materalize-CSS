import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service'
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('post') post: Post;
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  removePost(post){
    this.dataService.removePost(post);
  }

}
