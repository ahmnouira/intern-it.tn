import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../../offers.service';
import { Offer} from '../../offers';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  Offer : Offer;

  constructor(private actice_route: ActivatedRoute, private offerService : OffersService) {
    this.id = this.actice_route.params['value']['id'];
    this.offerService.getOffer(this.id).subscribe(data => {
      console.log(data);
      this.Offer = data;
    })
  
   }

  ngOnInit() {

  }

}
