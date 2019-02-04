import { NotFoundComponent } from './not-found/not-found.component';
import { CallbackComponent } from './callback.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'deals',
    pathMatch: 'full'
  },
  {
    path: 'deals',
    component: PublicDealsComponent
  },
  {
    path: 'special',
    component: PrivateDealsComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
