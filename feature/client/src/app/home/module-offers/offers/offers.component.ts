import { Component, OnInit } from '@angular/core';
import { OffersService } from '../../offers.service';
import { Offer} from '../../offers';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  offers: Offer[] = [];
  
  constructor(private offersService : OffersService) {
    this.offersService.getOffers().subscribe(res => {
    this.offers = res;
   })
  }

  getOffers(): Offer[] {
    return this.offers
  }
  ngOnInit() {}
  

}



