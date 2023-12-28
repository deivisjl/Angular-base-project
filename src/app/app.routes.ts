import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component'; 
import { DetailComponent } from './components/detail/detail.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';
import { MenuGuard } from './guards/menu.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard, MenuGuard] },
    { path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard, MenuGuard] },
    { path: 'home/detail/:id', component: DetailComponent, canActivate: [AuthGuard, MenuGuard] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];

export const routing = RouterModule.forRoot(routes);