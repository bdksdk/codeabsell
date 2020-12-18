import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kateqoriya',
  templateUrl: './kateqoriya.component.html',
  styleUrls: ['./kateqoriya.component.css']
})
export class KateqoriyaComponent implements OnInit {

  constructor() {

  }
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
