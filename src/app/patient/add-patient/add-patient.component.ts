import { Component, forwardRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddPatientComponent),
      multi: true,
    },
  ],
})
export class AddPatientComponent implements OnInit,ControlValueAccessor {
  @ViewChild ('signatureCanvas', {static: true}) signaturePad: SignaturePad;
  public options: Object = {};
  public _signature: any = null;
  public propagateChange: Function = null;
  get signature(): any {
    return this._signature;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  addPatient = this.fb.group({
    patientName: ['',[Validators.required]],
    date: ['', [Validators.required]],
    dignosis: [''],
    referedDr: [''],
    age: [''],
    gender: [''],
    weigth: [''],
    fees: ['',[Validators.required]],
    email: [''],
    treatment: ['',[Validators.required]],
    eAdvice: [''],
  });

  get patientName(){
    return this.addPatient.get('patientName');
  }

  get date(){
    return this.addPatient.get('date');
  }

  get fees(){
    return this.addPatient.get('fees');
  }

  get treatment(){
    return this.addPatient.get('treatment');
  }

  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 543,
    'canvasHeight': 150
  };

  set signature(value: any) {
    this._signature = value;
    console.log('set signature to ' + this._signature);
    console.log('signature data :');
    console.log(this.signaturePad.toData());
    this.propagateChange(this.signature);
  }

  canvasResize() {
    const canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', canvas.offsetWidth);
    this.signaturePad.set('canvasHeigth', canvas.offsetHeight);
  }

  public writeValue(value: any): void {
    if (!value) {
      return;
    }
    this._signature = value;
    this.signaturePad.fromDataURL(this.signature);
  }

  public registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(): void {
    // no-op
  }

  public ngAfterViewInit(): void {
    this.signaturePad.clear();
  }

  public drawStart(): void {
    console.log('Begin Drawing');
  }

  public drawComplete(): void {
    this.signature = this.signaturePad.toDataURL();
  }

  clearPad(){
    this.signaturePad.clear();
  }
 
  onSubmit() {
    console.log(this.addPatient.value);
    console.log(this.signature);
  }

}
