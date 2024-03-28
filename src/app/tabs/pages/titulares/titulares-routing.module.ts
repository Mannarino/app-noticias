import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitularesPage } from './titulares.page';

const routes: Routes = [
  {
    path: '',
    component: TitularesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TitularesPageRoutingModule {}
