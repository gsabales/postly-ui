import { inject, Injectable } from '@angular/core';
import { Post } from '../entities/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PostService {
  private readonly http = inject(HttpClient);

  getPosts$(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/postly/users/${userId}/post`);
  }

  createPost$(userId: string, postRequest: Post): Observable<Post> {
    return this.http.post<Post>(
      `http://localhost:8080/api/postly/users/${userId}/post`,
      postRequest,
    );
  }

  updatePost$(userId: string, postId: number, postRequest: Post): Observable<Post> {
    return this.http.put<Post>(
      `http://localhost:8080/api/postly/users/${userId}/post/${postId}`,
      postRequest,
    );
  }

  deletePost$(userId: string, postId: number): Observable<string> {
    return this.http.delete(`http://localhost:8080/api/postly/users/${userId}/post/${postId}`, {
      responseType: 'text',
    });
  }
}
