import { DatePipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

export interface PlacementData {
  id: number;
  name: string;
  jopTitleId?: number;
  startDate?: string;
  endDate?: string;
  status?: string
}
@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  url = 'users'
  constructor(private http: HttpRoutingService) {
  }
  public getUsers() {
    return this.http.getMethod(this.url)
  }
  public getUser(id: string) {
    return this.http.getMethod(this.url + '/' + id)
  }
  public postUser(value: any[]) {
    return this.http.postMethod(this.url, value)
  }



}
