import { Component, OnInit } from '@angular/core';
import { ServiceOffers } from '../offer-service/service-offers.service';
import { FormBuilder, FormGroup } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-offer',
  templateUrl: './list-offer.component.html',
  styleUrls: ['./list-offer.component.css']
})
export class ListOfferComponent implements OnInit {

  constructor(private offerService: ServiceOffers,private formBuilder: FormBuilder) { }
  _id: any;
  Offers: any;
  updateForm: FormGroup;
  submitted = false;

  ngOnInit() {

    this.getOffers();

    this.updateForm = this.formBuilder.group({
      type: [''],
      title: [''],
      description: [''],
      place: ['']
  })

  }

  // GET All Offers
  getOffers() {
      this.offerService.getOffers().subscribe(offers => {
      console.log(offers);
      this.Offers = offers;
      });
    }

  // DELETE Offers
  deleteOffer(id: string) {
    Swal.fire({
          title: 'Are you Sure ?',
          text: "You can't return !",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d6100f',
          cancelButtonColor: '#3dc405',
          confirmButtonText: 'Yes, Remove !',
          cancelButtonText:'Cancel'
        })
          .then((result) => {
            if (result.value) {
            this.offerService.deleteOffer(id).subscribe(offers => {
              console.log(offers);
              this.Offers = offers;
              return this.getOffers();
            });
        }
      });
    }

    // PUT offers
    updateOffer() {
    this.submitted = true;
    if (this.updateForm.invalid) {

      return;
    }

      // console.log(this.updateForm.value)
      // console.log("id :", this._id);
      this.offerService.updateOffer(this._id, this.updateForm.value).subscribe(offer => {
      this.submitted =false;
      this.updateForm.reset();
      this.getOffers();
      })

      Swal.fire(
        'OK!',
        'Offer Has been Updated',
        'success'
      )

    }

recupere(_id: any, title: any, type: any, description: any, place: any) {
  this._id=_id;
  this.updateForm.get('title').setValue(title);
  this.updateForm.get('description').setValue(description);
  this.updateForm.get('type').setValue(type);
  this.updateForm.get('place').setValue(place);
}

}
