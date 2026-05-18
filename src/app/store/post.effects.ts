import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType} from '@ngrx/effects';
import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class PostEffects {

  private readonly actions$ = inject(Actions);
  private readonly postService = inject(PostService);

  public loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts),
    mergeMap(({ userId }) =>
      this.postService.getPosts$(userId).pipe(
        map(posts => PostActions.loadPostsSuccess({ posts })),
        catchError(error =>
          of(PostActions.loadPostsFail({ error: error.message }))
        )
      )
    )
  ));
}
