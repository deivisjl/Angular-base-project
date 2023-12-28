import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectAuthenticated } from '../state/selectors/auth.selector';
import { AppState } from '../state/reducers/index.reducers';

@Injectable({providedIn: 'root'})
class PermissionGuestGuard
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

        return !status;
    }
}

export const GuestGuard: CanActivateFn = (route, state) => {
  
  if(inject(PermissionGuestGuard).canActivate())
  {
    return true;
  }
  else
  {
    inject(Router).createUrlTree(['/home']);

    return false;
  }
};
