import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-patient-portal',
  templateUrl: './patient-portal.component.html',
  styleUrls: ['./patient-portal.component.css']
})
export class PatientPortalComponent implements OnInit {
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  selected = 1;
  constructor() { }

  ngOnInit(): void {
  }

  setSelected(val) {
    this.selected = val;
  }

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 525,
    'canvasHeight': 150
  };
 
 
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
 
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
