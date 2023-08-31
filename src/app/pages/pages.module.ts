import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DiscoverMoreComponent } from './discover-more/discover-more.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from '../shared/_common/carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from '../shared/_common/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    DiscoverMoreComponent,
    CarouselComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
