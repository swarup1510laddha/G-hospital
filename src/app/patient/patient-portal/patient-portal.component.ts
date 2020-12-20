import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {

  selected = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setSelected(val) {
    this.selected = val;
  }
}
