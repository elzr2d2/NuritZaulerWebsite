import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  homeActive = true;
  aboutActive = false;
  contactActive = false;

  @HostListener('window:scroll', ['$event']) 
  navAct(event) {
    //console.log("Scroll Event", window.pageYOffset );
    if(window.pageYOffset<52)
    { // First navbar state
      this.aboutActive = false;
      this.contactActive = false;

    }else if(window.pageYOffset>=409 && window.pageYOffset<=1400)
    {// Active about on navbar
      this.aboutActive = true;
      this.contactActive = false;

    }else if(window.pageYOffset>1400)
    {// Active contactUs on navbar
      this.aboutActive = false;
      this.contactActive = true;
    }
  }

}
