import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { UsuariosComponent } from './components/usuario/usuario.component';
import { USUARIOS_ROUTES } from './components/usuario/usuario.routes';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario',
    component: UsuariosComponent,
    children: USUARIOS_ROUTES,
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);