import { createSelector } from "@ngrx/store";
import { AppState } from "../reducers/index.reducers";
import { AuthState } from "../types/state.model";

export const selectAuthState = (state: AppState) => state.auth;

export const selectUserAuth = createSelector(
    selectAuthState,
    (state: AuthState) => state.usuario
);

export const selectAuthenticated = createSelector(
    selectAuthState,
    (state: AuthState) => state.autenticado
);

export const selectUnidad = createSelector(
    selectAuthState,
    (state: AuthState) => state.unidad
);

export const selectNombreUnidad = createSelector(
    selectAuthState,
    (state: AuthState) => state.nombreUnidad
);

export const selectSistema = createSelector(
    selectAuthState,
    (state: AuthState) => state.sistema
);

export const selectRoles = createSelector(
    selectAuthState,
    (state: AuthState) => state.roles
);

export const selectMenu = createSelector(
    selectAuthState,
    (state: AuthState) => state.menu
);