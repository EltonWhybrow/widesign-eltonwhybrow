import { Pipe, PipeTransform } from '@angular/core';
import { IFaq } from '../models/faq-interface';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: IFaq[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    return items.filter(item => {
      return item.question.toLocaleLowerCase().includes(searchText);
    });

  }
}
