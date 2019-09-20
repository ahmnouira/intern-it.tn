import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceOffers } from '../offer-service/service-offers.service';

@Component({
  selector: 'app-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailComponent implements OnInit {

  id : any;
  Offer : any;
  constructor(private active_route: ActivatedRoute, private offerService: ServiceOffers) {
  this.id=this.active_route.params['value']['id'];
  this.getByID();
  }
  getByID() {
     this.offerService.getOffer(this.id).subscribe(offer => {
       console.log(offer);
       this.Offer = offer;
     });
  }
  ngOnInit() {
    this.getByID();
  }

}
