import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { UserService } from '../user.service';
import {
  CanActivate, Router,ActivatedRouteSnapshot,RouterStateSnapshot }from '@angular/router';
import { JwtRequest } from '../model/JwtRequest';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private jwtClientService:JwtClientService) { }
  loginForm:FormGroup;
  jwtRequest :JwtRequest;
  authRequest:JwtRequest ={
    "username":"",
    "password":""
  };

  status:boolean;

  loginUser() {
   
    var user=this.loginForm.get('firstName').value;
    var pass=this.loginForm.get('password').value;
    this.authRequest.username=user;
    this.authRequest.password=pass;
    this.jwtClientService.generateToken(this.authRequest).subscribe(data =>{
      if(data){
        var token=data['token']
        
        this.router.navigate(['/userlist',token]);
      }else{

        this.loginForm.controls['firstName'].setErrors({invalid: true});
       // this.router.navigate(['/login']);
      // this.status=false;
      // alert('username or password error');
      }
     
     // this.clearForm();
    });
   
  }


  ngOnInit(): void {

    this.loginForm = new FormGroup({

      firstName: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
  });
}

clearForm() {

  this.loginForm.reset({
        'firstName': '',
        'password': ''
  });
}
}
