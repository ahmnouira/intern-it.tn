import { Component, OnInit } from '@angular/core';
import { OffersService  } from '../../offers.service';
import { Offer} from '../../offers';

@Component({
  selector: 'app-find-recent',
  templateUrl: './find-recent.component.html',
  styleUrls: ['./find-recent.component.css']
})
export class FindRecentComponent implements OnInit {


  offers: Offer[] = [];
  Director : string;
  
  constructor(private offersService : OffersService) {
    this.offersService.getOffers().subscribe(res => {
    this.offers = res;
    this.Director = JSON.parse(localStorage.getItem('user')).account

  })

}

  getOffers(): Offer[] {
    //console.log("offers : ", this.offers)
    return this.offers
  }

 
  getOffersByType(type: string):Offer[] {
    return this.offers.filter(p => p.type == type) 
}

  ngOnInit() {}
  

}
