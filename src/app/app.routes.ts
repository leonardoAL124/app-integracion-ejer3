import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetallesPeliculasComponent } from './pages/detalles-peliculas/detalles-peliculas.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'peliculas', component: PeliculasComponent},
    { path: 'peliculas-detalles/:idPeliculas', component: DetallesPeliculasComponent},

    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: '**', component: Error404Component}
];
