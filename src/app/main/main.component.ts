import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
  constructor(){}
  ngOnInit():void{
    
  }
  login(a:any,b:any){
    console.log(a.value);
    console.log(b.value);
    
    
      alert("clicked")
  }

}
