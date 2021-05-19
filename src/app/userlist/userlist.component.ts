import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../model/user.model';
import { FormsModule }   from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  userList : Array<User>;
  firstName:string;

  constructor(private userService:UserService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    var token = this.route.snapshot.paramMap.get('token');

    // let resp = this.service.generateToken(authRequest);
    // resp.subscribe(data => this.accessApi(data));
alert(token)
    this.userService.getAllUsers(token)
    .subscribe( data => {
      this.userList = data;
    });
  }

}
