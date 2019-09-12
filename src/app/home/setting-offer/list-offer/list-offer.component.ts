import { Component, OnInit } from '@angular/core';
import { ServiceOffers } from '../../../service-offers.service'

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  constructor(private offerService: ServiceOffers) { }
  ListOffer;

  ngOnInit() {
    this.getAllOffers();
  }

  getAllOffers()
  {
    this.offerService.ListOffer().subscribe(res => {
      console.log(res);
      this.ListOffer = res;
    })
  }

}
