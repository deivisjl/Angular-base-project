import { createReducer, on } from "@ngrx/store";
import { SideNavState } from "../types/state.model";
import { loadedSideNav } from "../actions/sidenav.action";

export const initialState: SideNavState = { open:false }

export const sideNavReducer = createReducer(
    initialState,
    on(loadedSideNav,(state, { open }) => {
        return {...state, open: open }
    })
);