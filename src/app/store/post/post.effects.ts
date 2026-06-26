import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostService } from '../../services/post.service';
import * as PostActions from './post.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PostEffects {
  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);

  public loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPosts),
      mergeMap(({ userId }) =>
        this.postService.getPosts$(userId).pipe(
          map((posts) => PostActions.loadPostsSuccess({ posts })),
          catchError((error) => of(PostActions.loadPostsFail({ error: error.message }))),
        ),
      ),
    ),
  );

  public createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.createPost),
      mergeMap(({ userId, post }) =>
        this.postService.createPost$(userId, post).pipe(
          map((post) => PostActions.createPostSuccess({ post })),
          catchError((error) => of(PostActions.createPostFail({ error: error.message }))),
        ),
      ),
    ),
  );

  public updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.updatePost),
      mergeMap(({ userId, postId, updatedPost }) =>
        this.postService.updatePost$(userId, postId, updatedPost).pipe(
          map((updatedPost) => PostActions.updatePostSuccess({ updatedPost })),
          catchError((error) => of(PostActions.updatePostFail({ error: error.message }))),
        ),
      ),
    ),
  );

  public deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.deletePost),
      mergeMap(({ userId, postId }) =>
        this.postService.deletePost$(userId, postId).pipe(
          map((message) => PostActions.deletePostSuccess({ message, postId })),
          catchError((error) => of(PostActions.deletePostFail({ error: error.message }))),
        ),
      ),
    ),
  );
}
