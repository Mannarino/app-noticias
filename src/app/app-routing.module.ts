import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{
  path: '',
  component:HomeComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'para-ti',
    },
    {
      path: 'para-ti',
      loadChildren: () => import('./pages/para-ti/para-ti.module').then((m) => m.ParaTiPageModule),
    },
    {
      path: 'titulares',
      loadChildren: () => import('./pages/titulares/titulares.module').then((m) => m.TitularesPageModule),
    },
    {
      path: 'favoritos',
      loadChildren: () => import('./pages/favoritos/favoritos.module').then((m) => m.FavoritosPageModule),
    }
  ],
},] 
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
