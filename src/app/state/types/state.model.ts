import { Post } from "src/app/models/post.model";
import { User } from "src/app/models/user.model";

export interface UserState {
    items: ReadonlyArray<User>;
}

export interface PostState {
    items: ReadonlyArray<Post>;
}

export interface SideNavState {
    open: boolean;
}

export interface AuthState {
    usuario: object;
    autenticado: boolean;
    unidad: number;
    nombreUnidad: string;
    sistema: string;
    roles:object;
    menu:object;
}