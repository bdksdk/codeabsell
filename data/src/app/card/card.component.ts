import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  showbox:boolean=true
  ngOnInit(): void { }
  data(){
    if(this.showbox==true){
      this.showbox=false
    }else{
      this.showbox=true
    }
  }


}
