import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRoutingService {

  constructor(private httpService: HttpClient) {
  }
  apiUrl = environment.apiUrl;
  getMethod(url: string) {
    return this.httpService.get(this.apiUrl + 'v1/' + url)
  }
  postMethod(url: string, data: any) {
    return this.httpService.post(this.apiUrl + 'v1/' + url, data)
  }
  getJson(url: string) {
    return this.httpService.get('/assets/' + url)
  }
}
