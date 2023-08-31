import { Component } from '@angular/core';
import { ContentService } from '../../_services/content.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  showNavigationArrows = true;
	showNavigationIndicators = false;
  // images = [946, 1011, 984].map((n) => `https://picsum.photos/id/${n}/1920/800`);

  images: any;

  constructor(
    public contentService: ContentService
  ) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.contentService.getImages().subscribe((res) => {
      console.log(res);

      this.images = res.photos;
    });
  }
}
