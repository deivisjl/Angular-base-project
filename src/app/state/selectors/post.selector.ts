import { createSelector } from "@ngrx/store";
import { PostState } from "../types/state.model";
import { AppState } from "../reducers/index.reducers";

export const selectPostFeature = (state: AppState) => state.posts;

export const selectListItems = createSelector(
    selectPostFeature,
    (state: PostState) => state.items
);