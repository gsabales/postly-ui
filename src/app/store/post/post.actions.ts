import { createAction, props } from '@ngrx/store';
import { Post } from '../../entities/post';

export const loadPosts = createAction('[Post] Load Posts', props<{ userId: string }>());

export const loadPostsSuccess = createAction(
  '[Post API] Load Posts Success',
  props<{ posts: Post[] }>(),
);

export const loadPostsFail = createAction('[Post API] Load Posts Fail', props<{ error: string }>());

export const createPost = createAction(
  '[Post] Create Post',
  props<{ userId: string; post: Post }>(),
);

export const createPostSuccess = createAction(
  '[Post API] Create Post Success',
  props<{ post: Post }>(),
);

export const createPostFail = createAction(
  '[Post API] Create Post Fail',
  props<{ error: string }>(),
);

export const updatePost = createAction(
  '[Post] Update Post',
  props<{ userId: string; postId: number; updatedPost: Post }>(),
);

export const updatePostSuccess = createAction(
  '[Post API] Update Post Success',
  props<{ updatedPost: Post }>(),
);

export const updatePostFail = createAction(
  '[Post API] Update Post Fail',
  props<{ error: string }>(),
);

export const deletePost = createAction(
  '[Post] Delete Post',
  props<{ userId: string; postId: number }>(),
);

export const deletePostSuccess = createAction(
  '[Post API] Delete Post Success',
  props<{ message: string; postId: number }>(),
);

export const deletePostFail = createAction(
  '[Post API] Delete Post Fail',
  props<{ error: string }>(),
);
