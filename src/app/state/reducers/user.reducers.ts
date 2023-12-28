import { createReducer, on } from "@ngrx/store";
import { loadedUsers } from "../actions/user.actions";
import { UserState } from "../types/state.model";

export const initialState: UserState = { items:[] }

export const userReducer = createReducer(
    initialState,
    on(loadedUsers,(state, {users}) => {
        return {...state, items:users }
    })
);