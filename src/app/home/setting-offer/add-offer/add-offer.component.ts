import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceOffers } from '../offer-service/service-offers.service';
import Swal from 'sweetalert2';

//formdata

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private offerService: ServiceOffers, private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
            type: ['', Validators.required],
            title: ['', Validators.required],
            description: ['', Validators.required],
            place: ['']
        })
  }

    // convenience getter for easy access to form fiel
  get f() { return this.registerForm.controls; }

  addOffer() {
            this.submitted = true;
            // stop here if form is invalid

            console.log(this.registerForm.invalid)
            if (this.registerForm.invalid) {
                return;
            }

            this.offerService.addOffer(this.registerForm.value).subscribe(res => {
              console.log(res);
              this.submitted = false;
              this.registerForm.reset();
            })

            Swal.fire(
              'OK!',
              'Offer Has been Added',
              'success'
            )
        }
}
