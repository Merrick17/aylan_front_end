import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthComponent } from './auth/auth.component';
import { AylanComponent } from './aylan/aylan.component';
import { ExpertsComponent } from './experts/experts.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: '',
    component: AccueilComponent,
  },
  {
    path: 'experts',
    component: ExpertsComponent,
  },
  {
    path: 'service',
    component: ServicesComponent,
  },
  {
    path: 'login',
    component: AuthComponent,
  },
  {
    path: 'aylan',
    component: AylanComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
