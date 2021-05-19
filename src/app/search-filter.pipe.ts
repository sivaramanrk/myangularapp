import { Pipe, PipeTransform } from '@angular/core';
import { User } from './model/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: User[], searchText:string): User[] {
   
   if(!value || !searchText){
     return value;
   }
  

   return value.filter(val=>
      val.firstName.toLowerCase().indexOf(searchText.toLowerCase())!==-1);
  }

}
