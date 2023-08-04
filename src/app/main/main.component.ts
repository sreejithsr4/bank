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
  login(){
      alert("clicked")
  }
  acnoChange(event:any){
    console.log(event.target.value);
    
  }
  pass(event:any){
    console.log(event.target.value);
    
  }

}
