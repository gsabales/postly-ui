import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllPosts } from '../store/post/post.selector';
import { Observable } from 'rxjs';
import { Post } from '../entities/post';
import { deletePost, loadPosts, updatePost } from '../store/post/post.actions';
import { AuthActions } from '../store/auth/auth.actions';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit {
  public posts$!: Observable<Array<Post>>;
  public isEditable: boolean = false;
  public editingPostId: number | null = null;
  public contentMap: { [key: number]: string } = {};

  private readonly store = inject(Store);

  ngOnInit() {
    this.store.dispatch(loadPosts({ userId: '1' }));
    this.posts$ = this.store.select(selectAllPosts);
  }

  startEdit(post: Post): void {
    this.editingPostId = post?.id!;
    this.contentMap[post?.id!] = post?.content!;
  }

  saveEdit(post: Post): void {
    const updatedPost = {
      ...post,
      content: this.contentMap[post.id!],
    };

    this.store.dispatch(updatePost({ userId: '1', postId: post.id!, updatedPost }));
    this.editingPostId = null;
  }

  cancelEdit(): void {
    this.editingPostId = null;
  }

  deletePost(post: Post): void {
    this.store.dispatch(deletePost({ userId: '1', postId: post.id! }));
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
