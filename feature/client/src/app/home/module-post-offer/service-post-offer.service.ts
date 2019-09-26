import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostOfferService {

  baseUrl = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  addOffer(Offer: any ) {
    return this.http.post(this.baseUrl + '/api/offers/' , Offer)
  }
}
