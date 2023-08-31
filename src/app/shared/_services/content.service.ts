import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry, catchError, shareReplay } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // Base url
  imageBaseurl = 'https://api.slingacademy.com/v1/sample-data/photos';
  constructor(private http: HttpClient) {}
  // use for headers customisation. not use for now
  // Http Headers
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  /**
   * retrive image list for carausole
   * @returns image data object
   */
  getImages(): Observable<any> {
    const params = new HttpParams().set('offset', 1).set('limit', 4);
    return this.http
      .get<any>(this.imageBaseurl, { params: params })
      .pipe(shareReplay(1));
  }

  /**
   * this is the same function as above. we can customisa this function with paramse. then we can use single function instead two function
   * @returns image data object
   */
  getImagesForCards(): Observable<any> {
    const params = new HttpParams().set('offset', 1).set('limit', 24);
    return this.http
      .get<any>(this.imageBaseurl, { params: params })
      .pipe(shareReplay(1));
  }
}
