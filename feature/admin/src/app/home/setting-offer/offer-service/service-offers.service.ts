import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceOffers {

  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  getOffers() {
    return this.http.get(this.baseUrl + '/api/offers/')
  }

  getOffer(id) {
    return this.http.get(this.baseUrl + '/api/offers/' +id )
  }

  deleteOffer(id: string) {
    return this.http.delete(this.baseUrl + '/api/offers/' + id)
  }

  addOffer(Offer: any) {
    return this.http.post(this.baseUrl + '/api/offers/',Offer)
  }

  updateOffer(id: string, Offer:any) {
    return this.http.put(this.baseUrl + '/api/offers/' + id, Offer )
  }

}
