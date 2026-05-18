import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentBlock } from './comment-block';

describe('CommentBlock', () => {
  let component: CommentBlock;
  let fixture: ComponentFixture<CommentBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentBlock],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentBlock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
