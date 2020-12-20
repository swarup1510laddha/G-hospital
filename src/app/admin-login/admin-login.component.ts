import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    Email:  ['', [Validators.required,Validators.pattern]],
    Password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(20)]],
  });

get Email(){
  return this.loginForm.get('Email');
}
  
get Password(){
  return this.loginForm.get('Password');
}

onSubmit() {
  this.router.navigate(['/Patient-Portal']);
}

}
