export class Address{
    addressLineOne:string;
    addressLineTwo:string;
    state:string;
    city:string;
    zip:string;
    constructor(addressLineOne:string,addressLineTwo:string,state:string,city:string,zip:string){

        this.addressLineOne=addressLineOne;
        this.addressLineTwo=addressLineTwo;
        this.state=state;
        this.city=city;
        this.zip=zip;
        
    }
}