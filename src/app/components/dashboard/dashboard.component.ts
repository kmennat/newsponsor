import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'Sponsorship-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
  }


  onSubmit(){    
    //this.notShow=true;
    this.router.navigate(['admin-page'])
    //this.router.navigate(['dashboard'])
  }
}

