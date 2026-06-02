import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentBlock } from './comment-block/comment-block';
import {MainPage} from './main-page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MainPage, CommentBlock],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CommentBlock]
})
export class MainPageModule {}
