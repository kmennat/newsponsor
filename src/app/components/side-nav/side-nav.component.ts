import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Sponsorship-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  currenturl: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  currentState(url:string) : boolean {
   return this.currenturl.includes(url)
  }

}
