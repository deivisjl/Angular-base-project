import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthenticated, selectUserAuth } from './state/selectors/auth.selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  
  title = 'JSONPlaceholder';

  constructor(private store: Store<any>,
      private router: Router){}

  ngOnInit(): void 
  {
    this.validarSesion();
  }

  validarSesion()
  {
    console.log("validarSesion")
    this.store.select(selectAuthenticated).subscribe(
      (autenticado) => {
        !autenticado ? this.router.navigate(['/login']) : this.verificarUsuario()
      }
    );
  }

  verificarUsuario()
  {
    console.log("verificarUsuario")
    this.store.select(selectUserAuth).subscribe(
      (usuario) => {
        (usuario && Object.keys(usuario).length === 0)  ? this.obtenerDatosUsuario() : ""
      }
    );
  }

  obtenerDatosUsuario() 
  {
    console.log("obtenerDatosUsuario")
  }
}
