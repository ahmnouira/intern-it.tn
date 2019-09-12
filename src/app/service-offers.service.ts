import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceOffers {
  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  ListOffer() {
    return this.http.get(this.baseUrl + '/api/offers/')
  }
}
