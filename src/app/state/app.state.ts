import { ActionReducerMap } from "@ngrx/store";
import { userReducer } from "./reducers/user.reducers";
import { postReducer } from "./reducers/post.reducers";
import { AppState } from "./reducers/index.reducers";
import { sideNavReducer } from "./reducers/sidenav.reducers";
import { authReducer } from "./reducers/auth.reducers";

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    users: userReducer,
    posts: postReducer,
    sideNav: sideNavReducer,
    auth: authReducer,
}