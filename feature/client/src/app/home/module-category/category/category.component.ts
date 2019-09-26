import { Component, OnInit } from '@angular/core';
import { OffersService  } from '../../offers.service';
import { Offer} from '../../offers';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {


  selectedType : string
  categoryType : string
  offers: Offer[] = [];

  
  constructor(private offersService : OffersService) {
    this.offersService.getOffers().subscribe(res => {
    this.offers = res;
   })
  }

  getOffers(): Offer[] {
    console.log("offers : ", this.offers)
    return this.offers
  }

  
  getSelectedType(event: any) {
    console.log(event.target.value);
    this.selectedType = event.target.value;
  }

    
  
  getOffersByType():Offer[] {

    if (this.selectedType == undefined || this.selectedType =='All') {
      this.categoryType = 'All'
      return this.getOffers();
    }

    else if (this.selectedType != 'Category') {
    this.categoryType = this.selectedType
    return this.offers.filter(p => p.type == this.selectedType) 
    }   
}


  ngOnInit() {
    console.log(this.selectedType)
    
  }

}
