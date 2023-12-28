import { createReducer, on } from "@ngrx/store";
import { loadedPosts } from "../actions/post.actions";
import { PostState } from "../types/state.model";

export const initialState: PostState = { items:[] }

export const postReducer = createReducer(
    initialState,
    on(loadedPosts,(state, {posts}) => {
        return {...state, items:posts }
    })
);