import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectMenu } from '../state/selectors/auth.selector';
import { AppState } from '../state/reducers/index.reducers';

@Injectable({providedIn: 'root'})
class PermissionMenuGuard
{
    constructor(private store: Store<AppState>){}

    canNavigate(route : ActivatedRouteSnapshot, url: string) : boolean
    {
      let navigate : boolean = true;
      let ruta : string [] = [];
      let rutaFinal : string = "";

      this.store.select(selectMenu).subscribe(
        (registros) => {
            ruta = url.split("/");

            ruta.shift()
            
            if(Object.keys(route.params).length > 0 || Object.keys(route.queryParams).length > 0)
            {
              ruta.pop();
            }

            rutaFinal = "/" + ruta.join("/");
            
            navigate = this.hasRoutePermission(Object.values(registros), rutaFinal)
        }
      );
      
      return navigate;
    }

    hasRoutePermission = (registros: string[], ruta : string) => {

        for (let index = 0; index < registros.length; index++)
        {
          if(registros[index] == ruta)
          {
            return true;
          }
        }
        
        return false;
    }
}

export const MenuGuard: CanActivateFn = (route, state) => {

  if(inject(PermissionMenuGuard).canNavigate(route, state.url))
  {
    return true;
  }

  inject(Router).createUrlTree(['/']);
  
  return false;
};
