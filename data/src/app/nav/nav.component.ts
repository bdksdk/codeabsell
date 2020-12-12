import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

class Category {
  id: number | undefined;
  name: string | undefined;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Category[]>('https://sell-social-dev.herokuapp.com/api/v1/categories')
      .subscribe((data: Category[]) => {
        this.categories = data;
      }, (err) => {
        console.log(err);
      });
  }

}

