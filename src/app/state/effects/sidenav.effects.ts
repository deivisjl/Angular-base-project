import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap } from "rxjs";

@Injectable()
export class SideNavEffects {

    constructor(private actions$: Actions)
    {

    }
}