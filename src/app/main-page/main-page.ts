import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectAllPosts} from '../store/post.selector';
import {Observable} from 'rxjs';
import {Post} from '../entities/post';
import {loadPosts} from '../store/post.actions';

@Component({
  selector: 'app-main-page',
  standalone: false,
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage implements OnInit{

  public posts$!: Observable<Array<Post>>;

  public constructor(
    private readonly store: Store,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadPosts({ userId: "1" }));
    this.posts$ = this.store.select(selectAllPosts);
  }
}
