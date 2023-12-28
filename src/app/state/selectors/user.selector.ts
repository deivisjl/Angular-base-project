import { createSelector } from "@ngrx/store";
import { UserState } from "../types/state.model";
import { AppState } from "../reducers/index.reducers";

export const selectUserFeature = (state: AppState) => state.users;

export const selectListItems = createSelector(
    selectUserFeature,
    (state: UserState) => state.items
);