import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test';


  reactiveForms:FormGroup;

  ngOnInit(){
    this.reactiveForms = new FormGroup({
      firstname: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null , [Validators.email,Validators.required]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      street: new FormControl(null,[Validators.required,Validators.minLength(10)]),
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
      skills: new FormControl(null),
    })
  }
  formSubmitted(){
    console.log(this.reactiveForms);
    
  }
}
