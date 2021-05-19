import { Injectable } from '@angular/core';
import { User } from './model/user.model';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './model/userlogin.model';
import { JwtRequest } from './model/JwtRequest';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient){ }

  private userUrl = 'http://localhost:7711/register';
  private loginuserUrl='http://localhost:7711/user/loginuser';

  private getTokenUrl='http://localhost:7711/authenticate';

  public createUser(user): Observable<User>  {
  
    return this.http.post<User>(this.userUrl, user);
  }

  public getLoginToken(user:JwtRequest): Observable<JwtRequest>  {
  
    return this.http.post<JwtRequest>(this.getTokenUrl, user);

  }

  
  public generateToken(request){
    return this.http.post("http://localhost:7711/authenticate",request);
  }


  getLoginUser(user): Observable<LoginUser>  {
 
    return this.http.post<User>(this.loginuserUrl, user);
  }

  public getAllUsers(token) {
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization",tokenStr);
    return this.http.get<User[]>('http://localhost:7711/user/getallusers',{headers});
  }

}
