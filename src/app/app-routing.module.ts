import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiscoverMoreComponent } from './pages/discover-more/discover-more.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'page-2',
    component: DiscoverMoreComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
