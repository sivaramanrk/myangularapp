import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  registerForm:FormGroup;
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    this.registerForm = new FormGroup({

      username: new FormControl('',[Validators.required]),
      firstName: new FormControl('',[Validators.required]),
      lastName: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      email:new FormControl('',[Validators.required,Validators.email]),
        address:new FormGroup({
          addressLineOne:new FormControl('',Validators.required),
          addressLineTwo:new FormControl('',Validators.required),
          city:new FormControl('',Validators.required),
          state:new FormControl('',Validators.required),
          zip:new FormControl('',Validators.required)
        })
      
    });
  }

  

  
  registerUser() {
    
    this.userService.createUser(this.registerForm.value).subscribe(data =>{
      alert("user details succesfully inserted");
      this.clearForm();
    });
   
  }

  clearForm() {

    this.registerForm.reset({
          'firstName': '',
          'lastName': '',
          'password': '',
          'email': '',
          'street':'',
          'city': '',
          'state': '',
         });
    }
 
}
