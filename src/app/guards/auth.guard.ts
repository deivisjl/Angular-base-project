import { CanActivateFn, Router } from '@angular/router';
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../state/selectors/auth.selector';
import { AppState } from '../state/reducers/index.reducers';

@Injectable({providedIn: 'root'})
class PermissionAuthGuard
{
    constructor(private store: Store<AppState>){}

    canActivate() : boolean
    {
        let status : boolean = false;

        this.store.select(selectAuthenticated).subscribe(
            (state) => {
                status = state;
            }
        );

        return status;
    }
}

export const AuthGuard: CanActivateFn = (route, state) => {
  
  if(inject(PermissionAuthGuard).canActivate())
  {
    return true;
  }
  else
  {
    inject(Router).createUrlTree(['/login']);

    return false;
  }
};
