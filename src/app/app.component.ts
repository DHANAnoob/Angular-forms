import { Component, OnInit } from '@angular/core';
import { CustomValidators } from './validators/noSpaceAllowed.validators'
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
      firstname: new FormControl(null, [Validators.required,Validators.minLength(2),CustomValidators.noSpaceAllowed]),
      lastname: new FormControl(null, [Validators.required, CustomValidators.noSpaceAllowed]),
      email: new FormControl(null , [Validators.email,Validators.required]),
      username: new FormControl(null),
      dob: new FormControl(null),
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null,[Validators.required,Validators.minLength(10)]),
        country: new FormControl('India'),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null,Validators.required),
      }),

     
      skills: new FormControl(null),
    })
  }
  formSubmitted(){
    console.log(this.reactiveForms);
    
  }
}
