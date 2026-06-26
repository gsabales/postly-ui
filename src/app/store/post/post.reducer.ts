import { createReducer, on } from '@ngrx/store';
import * as PostActions from './post.actions';
import { initialState } from './post.state';

export const postReducer = createReducer(
  initialState,

  on(PostActions.loadPosts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),

  on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),

  on(PostActions.loadPostsFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(PostActions.createPost, (state) => ({
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
    error,
  })),

  on(PostActions.updatePost, (state) => ({
    ...state,
    loading: true,
  })),

  on(PostActions.updatePostSuccess, (state, { updatedPost }) => ({
    ...state,
    posts: state.posts.map((currentPost) =>
      currentPost.id === updatedPost.id ? updatedPost : currentPost,
    ),
    loading: false,
  })),

  on(PostActions.updatePostFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(PostActions.deletePost, (state) => ({
    ...state,
    loading: true,
  })),

  on(PostActions.deletePostSuccess, (state, { postId }) => ({
    ...state,
    posts: state.posts.filter((post) => post.id !== postId),
    loading: false,
  })),

  on(PostActions.deletePostFail, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);
