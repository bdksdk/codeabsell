import {Component, OnInit} from '@angular/core';
import {Category} from '../nav/nav.component';
import {HttpClient} from '@angular/common/http';
import {DictionaryService} from '../services/dictionary.service';

@Component({
  selector: 'app-kateqoriya',
  templateUrl: './kateqoriya.component.html',
  styleUrls: ['./kateqoriya.component.css']
})
export class KateqoriyaComponent implements OnInit {
  categories: any;

  showbox: boolean = true;

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

  data() {
    if (this.showbox == true) {
      this.showbox = false;
    } else {
      this.showbox = true;
    }
  }

}
