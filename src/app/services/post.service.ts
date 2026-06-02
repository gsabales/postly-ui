import {Injectable} from '@angular/core';
import {Post} from '../entities/post';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts$(userId: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://localhost:8080/api/postly/users/${userId}/post`);
  }

  createPost$(userId: string, post: Post): Observable<Post> {
    return this.http.post(`http://localhost:8080/api/postly/users/${userId}/post`, post);
  }
}
