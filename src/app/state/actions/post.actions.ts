import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/models/post.model';

export const loadedPosts = createAction(
    '[Post Item Loaded Success]',
    props<{ posts:Post[] }>()
);