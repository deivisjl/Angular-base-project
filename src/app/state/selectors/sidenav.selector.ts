import { createSelector } from "@ngrx/store";
import { SideNavState, UserState } from "../types/state.model";
import { AppState } from "../reducers/index.reducers";

export const selectSideNavState = (state: AppState) => state.sideNav;

export const selectSideNavItem = createSelector(
    selectSideNavState,
    (state: SideNavState) => state.open
);