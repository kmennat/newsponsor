import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Sponsorship-sponsor-profile',
  templateUrl: './sponsor-profile.component.html',
  styleUrls: ['./sponsor-profile.component.css']
})
export class SponsorProfileComponent implements OnInit {

  sponsorDetails = 
  {
    firstName: "Al Nora",
    lastName: 'Mobatach',
    address: 'JLT DMCC Dubai',
    personalIdCard: '329023',
    telephoneNumber: '39239923',
    email: "aln@gmail.com",
    nameOfFamilyAssisted: 'Jumairah Katey',
    NrOfFamilyHelped: 4,
    helpType: 'Sponsored',
    contributedAmount: "50K DHM",
    paid: true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
