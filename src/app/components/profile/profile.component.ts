import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEdit = false

  orphanDetails = {
    imageUrl: '',
    familyName: 'Jumairah Katey',
    motherName: 'Nasty Wilcon',
    motherFirstName: 'Ajriza Khanum',
    maternalHealthStatus: 'Good Health',
    personalId: 2323232,
    telephoneNumber: '3020392',
    profession: 'House Wife',
    numberOfOrphans: 3,
    spouseDeathDate: new Date(),
    address: 'new auston roads street iii',
    attachements: [

    ],
    orphansList: [
      {
        name: 'Arman Khan',
        dateOfBirth: new Date(),
        firstName: 'Arman',
        healthStatus: 'Normal Healthy',
        residentialStatus: 'Single',
        numberOfPeople: 3,
        socialCare: 'fit',
        earning: 'Student',
        academicLevel: '5 Grade',
        notes: 'this is details about orphan'
      },
      {
        name: 'Sony Tomer',
        dateOfBirth: new Date(),
        firstName: 'Sony',
        healthStatus: 'Normal Healthy',
        residentialStatus: 'Single',
        numberOfPeople: 3,
        socialCare: 'fit',
        earning: 'Student',
        academicLevel: '6 Grade',
        notes: 'this is details about orphan'
      }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleEdit(){
    this.isEdit = ! this.isEdit
  }

}
