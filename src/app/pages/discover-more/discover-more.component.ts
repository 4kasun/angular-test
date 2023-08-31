import { Component } from '@angular/core';
import { ContentService } from 'src/app/shared/_services/content.service';

@Component({
  selector: 'app-discover-more',
  templateUrl: './discover-more.component.html',
  styleUrls: ['./discover-more.component.css']
})
export class DiscoverMoreComponent {

  showNavigationArrows = true;
	showNavigationIndicators = false;

  images: any;

  constructor(
    public contentService: ContentService
  ) {}

  ngOnInit() {
    this.loadImages();
  }

  loadImages() {
    this.contentService.getImagesForCards().subscribe((res) => {
      console.log(res);

      this.images = res.photos;
    });
  }

}
