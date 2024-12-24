import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ValidateTokenGuard   } from './core/guards/auth.guard';
import {LayoutComponent  } from './core/layout/layout/layout.component';
const routes: Routes = [
  { path:'auth',
    loadChildren:()=> import("./features/auth/auth.module").then(m=> m.AuthModule)
   },

  {
    path:'layout',
    loadChildren:()=> import('./core/layout/layout.module').then(m=>m.LayoutModule),
    //  canActivate:[ValidateTokenGuard ],
    //  canLoad:[ValidateTokenGuard ],
},
{
  path:'**',
  redirectTo:'auth',
   pathMatch: 'full'
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
