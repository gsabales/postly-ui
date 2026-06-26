import { Post } from '../../entities/post';

export interface PostState {
  posts: Post[];
  selectedPost: Post | null;

  loading: boolean;
  error: string | null;
}

export const initialState: PostState = {
  posts: [],
  selectedPost: null,

  loading: false,
  error: null,
};
