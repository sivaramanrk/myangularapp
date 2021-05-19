import { Address } from './useraddress.model';

export class User{
    id:number;
    username:string;
    firstName:string;
    lastName:string;
    password:string;
    email:string;
    // street:string;
    // city:string;
    // state:string;
    address:Address;
    

    constructor(id:number,username:string,firstName:string,lastName:string,password:string,email:string,address:Address){
        this.id=id;
        this.username=username;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.email=email;
        this.address=address;
        // this.street=street;
        // this.city=city;
        // this.state=state;
    }
}