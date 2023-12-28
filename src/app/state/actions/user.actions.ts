import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const loadedUsers = createAction(
    '[User Item Loaded Success]',
    props<{ users:User[] }>()
);