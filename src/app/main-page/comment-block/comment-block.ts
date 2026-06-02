import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {FormControl, FormGroup} from '@angular/forms';
import {createPost} from '../../store/post.actions';

@Component({
  selector: 'app-comment-block',
  templateUrl: './comment-block.html',
  styleUrl: './comment-block.scss',
  standalone: false,
})
export class CommentBlock implements OnInit{

  public constructor(
    private readonly store: Store,
  ) {}

  postFormGroup = new FormGroup({
    title: new FormControl('sample title', { nonNullable: true }),
    content: new FormControl('', { nonNullable: true }),
    isPublished: new FormControl(false, { nonNullable: true })
  });

  ngOnInit(): void {
  }

  postComment() {
    const post = this.postFormGroup.getRawValue();
    console.log(post);
    // sample user id: 1
    post.isPublished = true;
    this.store.dispatch(createPost({ userId: "1", post }));
  }
}
