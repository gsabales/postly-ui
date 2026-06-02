import {createReducer, on} from '@ngrx/store';
import * as PostActions from './post.actions'
import {initialState} from './post.state';

export const postReducer = createReducer(

  initialState,

  on(PostActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),

  on(PostActions.loadPostsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  on(PostActions.createPost, (state, { post }) => ({
    ...state,
    loading: true,
  })),

  on(PostActions.createPostSuccess, (state, { post }) => ({
    ...state,
    posts: [...state.posts, post],
    loading: false,
  })),

  on(PostActions.createPostFail, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);
