import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  
  displayName = "true";
  public color="";
  public colors=["red","blue","green"];
  public person = {
    "name":"rohit",
    "surname":"sharma"

  };

  public date = new Date();

  // Receiving input from parent
  @Input('parentData') public Appuser;
  // sending input to parent
  @Output() public childEvent = new EventEmitter();
  constructor() { 
    
  }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit("Hi from child");
  }

}
