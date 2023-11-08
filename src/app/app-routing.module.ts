import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: 'auth',
          loadChildren: () => import('./features/auth/auth.module').then((m) => m.default),
        },
        {
          path: '',
          loadChildren: () => import('./features/landing/landing.module').then((m) => m.default),
        },
        // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      ],
      {
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
        onSameUrlNavigation: 'reload',
      },
    ),
  ],
  exports: [RouterModule],
})
export default class AppRoutingModule {}
