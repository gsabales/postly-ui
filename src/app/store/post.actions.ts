import {createAction, props} from '@ngrx/store';
import {Post} from '../entities/post';

export const loadPosts = createAction('[Post] Load Posts', props<{ userId: string }>());

export const loadPostsSuccess = createAction('[Post API] Load Posts Success', props<{ posts: Post[] }>());

export const loadPostsFail = createAction('[Post API] Load Posts Fail', props<{ error: string }>());

export const createPost = createAction('[Post] Create Post', props<{ post: Partial<Post> }>());

export const createPostSuccess = createAction('[Post API] Create Post Success', props<{ post: Post }>());

export const createPostFail = createAction('[Post API] Create Post Fail', props<{ error: string }>());
