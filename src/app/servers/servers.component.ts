import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//changing selector as an attribute , now app-server can be an attribute in div
  templateUrl: './servers.component.html',//` can be used for multiline comment
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName="Testserver";
  serverCreated = false;
  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);

  }

  ngOnInit() {
  }
  OnCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Name is "+ this.serverName;
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
