import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  showSideNav = false;
  constructor() { }

  ngOnInit() {
  }

  openSideNav() {
    if (this.showSideNav === false) {
      this.showSideNav = true;
    }
    else {
      this.showSideNav = false;
    }
  }

}
