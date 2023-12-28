import { createReducer, on } from "@ngrx/store";
import { AuthState } from "../types/state.model";
import { loadAuth } from "../actions/auth.actions";

export const initialState: AuthState = { 
        autenticado: localStorage.getItem('token') && localStorage.getItem('token') != "" ? true : false,
        usuario: {},
        unidad: -1,
        nombreUnidad: "",
        sistema: "",
        roles:[],
        menu:["/home","/detail"],
}

export const authReducer = createReducer(
    initialState,
    on(loadAuth,(state, { autenticado, usuario, unidad, nombreUnidad, sistema, roles, menu }) => {
        return {...state, autenticado: autenticado, usuario : usuario, unidad : unidad, nombreUnidad : nombreUnidad, sistema: sistema, roles : roles, menu : menu }
    })
);