import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Comment }                from './comment';
import { CommentService }         from './comments.service';
import { AppService }         from '../app.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  moduleId: module.id,
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  selectedComment: Comment;
  term$ = new Subject<string>();
  constructor(
    private commentservice: CommentService,
    private router: Router,
    private appservice : AppService) { 
        this.commentservice.searchComments(this.term$).subscribe(results =>this.comments = results);
    }
  searchComments(term$){
    this.term$.subscribe(term =>this.searchComments(term$));
      }
  
  getAllComments(): void {
    this.commentservice
        .getAllComments()
        .then(comments => this.comments = comments);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.commentservice.create(name)
      .then(comment => {
        this.comments.push(comment);
        this.selectedComment = null;
      });
  }

  delete(comment: Comment): void {
    this.commentservice
        .delete(comment.Id)
        .then(() => {
          this.comments = this.comments.filter(h => h !== comment);
          if (this.selectedComment === comment) { this.selectedComment = null; }
        });
  }

  ngOnInit(): void {
    this.getAllComments();
  }

  onSelect(comment: Comment): void {
    this.selectedComment = comment;
  }
    onDeSelect(): void {
    this.selectedComment = null;
  }

  gotoDetail(): void {
    this.router.navigate(['/comment', this.selectedComment.Id]);
  }
}
