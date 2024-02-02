import { Pipe, PipeTransform } from '@angular/core';
import {Person} from "./second-third-task/models";

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(values: Array<Person>, framework: string): Array<Person> {
    if (!framework) {
      return values;
    }

    return values.filter((person) => {
      return person.framework === framework
    });
  }

}
