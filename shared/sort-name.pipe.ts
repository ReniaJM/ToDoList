import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "../models/task";

@Pipe({
  name: 'sortName',
  pure: true
  // to jest utawianie defaultowe
  // teraz pipe jest inpure, czyli sortuje tablice, ale jets to bardzo niewydajnie poniewac on reguje czyli sortuje tablice nawet jak sie poruszy myszka jest to bardzo niewydajnie zajmueje bardzo duzo pamieci
})
export class SortNamePipe implements PipeTransform {

  transform(value: Array<Task>, args?: any): any {
    return value.sort((a,b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()){
        return 1;
      }else{
        return -1;
      }
    });
  }

}
