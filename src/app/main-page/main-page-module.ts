import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBlock } from './comment-block/comment-block';
import {MainPage} from './main-page';

@NgModule({
  declarations: [MainPage, CommentBlock],
  imports: [CommonModule],
})
export class MainPageModule {}
