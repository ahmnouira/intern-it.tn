import { Component, OnInit } from '@angular/core';
import { Offer } from './model';

@Component({
  selector: 'app',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  offers: Offer[]=[{
    _id: "1",
    title: "Développeur back-end Python (middle/senior)",
    description: "Desc: Développeur back-end Python (middle/senior)",
    location: "Sousse-Tunisie",
    connaisance: ["Python", "Django", "MongoDB", "POSTGRESQL"],
    entreprise:"Travelline"
  }, {

  _id: "2",
  title: "Développeurs JAVA JEE",
  description:  "Desc: Développeurs JAVA JEE ",
  location: "Monastir",
  connaisance: ["JAVA", "JAVEEE"],
  entreprise:"Boostiny"

  },{

    _id: "3",
    title: "Développeur back-end Python (middle/senior)",
    description: "Desc: Développeur back-end Python (middle/senior)",
    location: "Sousse-Tunisie",
connaisance: ["Python", "Django", "MongoDB", "POSTGRESQL"],
entreprise:"Travelline"

},{

_id: "1",
title: "Développeur back-end Python (middle/senior)",
description: "Desc: Développeur back-end Python (middle/senior)",
location: "Sousse-Tunisie",
connaisance: ["Python", "Django", "MongoDB", "POSTGRESQL"],
entreprise:"Travelline",

}
]

  constructor() { }

  ngOnInit() {
  }

}
