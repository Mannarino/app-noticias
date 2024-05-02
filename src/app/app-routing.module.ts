import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorTabComponent } from './tabs/contenedor-tab/contenedor-tab.component';


const routes: Routes = [{
  path: '',
  component:ContenedorTabComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'para-ti',
    },
    {
      path: 'para-ti',
      loadChildren: () => import('./tabs/pages/para-ti/para-ti.module').then((m) => m.ParaTiPageModule),
    },
    {
      path: 'titulares',
      loadChildren: () => import('./tabs/pages/titulares/titulares.module').then((m) => m.TitularesPageModule),
    
    },
    {
      path: 'favoritos',
      loadChildren: () => import('./tabs/pages/favoritos/favoritos.module').then((m) => m.FavoritosPageModule),
    }
  ],
},] 
  
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
