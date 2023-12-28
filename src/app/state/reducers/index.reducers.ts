import { AuthState, PostState, SideNavState, UserState } from "../types/state.model";

export interface AppState {
    users: UserState;
    posts: PostState;
    sideNav: SideNavState;
    auth: AuthState;
}