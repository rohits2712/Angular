import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  displayName = "true";
  public color="";
  public colors=["red","blue","green"];
  constructor() { 
    
  }

  ngOnInit() {
  }

}
