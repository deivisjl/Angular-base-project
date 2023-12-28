import { createAction, props } from '@ngrx/store';

export const loadedSideNav = createAction(
    '[Sidenav Menu] Sidenav',
    props<{ open: boolean }>()
);