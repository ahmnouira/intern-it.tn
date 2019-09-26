import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Offer } from './offers';
import { Observable } from 'rxjs';

const PROTOCOL = "http";
const PORT = 4000;


@Injectable({
  providedIn: 'root'
})


export class OffersService {

  baseUrl : string 
  constructor(private http: HttpClient) { 

    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getOffer(id: string):Observable<Offer> {
    return this.http.get<Offer>(this.baseUrl + "api/offers/" + id)
  }
 
  getOffers():Observable<Offer[]> {
    return this.http.get<Offer[]>(this.baseUrl + "api/offers");
  }


}
