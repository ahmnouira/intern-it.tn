import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ServicePostOfferService } from '../service-post-offer.service';

@Component({
  selector: 'app-post-offer',
  templateUrl: './post-offer.component.html',
  styleUrls: ['./post-offer.component.css']
})
export class PostOfferComponent implements OnInit {

  postForm : FormGroup

  constructor(private servicePostOffer: ServicePostOfferService, private formBuilder: FormBuilder ) { }

  ngOnInit() {

    this.postForm = this.formBuilder.group({

        type: ['', Validators.required],
        title: ['', Validators.required],
        description: ['', Validators.required],
        place: ['']
  
    })
  }

  addOffer() {
    console.log(this.postForm.value);
    this.servicePostOffer.addOffer(this.postForm.value).subscribe(data => {
        console.log(data)
        this.postForm.reset();
  })

  }

  }