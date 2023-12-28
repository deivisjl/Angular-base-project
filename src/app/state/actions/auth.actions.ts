import { createAction, props } from '@ngrx/store';

export const loadAuth = createAction(
    '[Auth action] Auth',
    props<{ autenticado: boolean, usuario: object, unidad: number,nombreUnidad: string, sistema: string, roles:string[], menu:string[] }>()
);