import {Category} from '../nav/nav.component';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  private http: HttpClient;
  categories: any;


  constructor(http: HttpClient) {
    this.http = http;
  }

  // @ts-ignore
  getCategory(): Category[] {
    this.http.get<Category[]>('https://sell-social-dev.herokuapp.com/api/v1/categories')
      .subscribe((data: Category[]) => {
        this.categories = data;
        console.log(data);
        return data;
      }, (err) => {
        console.log(err);
      });
    return this.categories;
  }
}
