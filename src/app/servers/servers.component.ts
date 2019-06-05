import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//changing selector as an attribute , now app-server can be an attribute in div
  templateUrl: './servers.component.html',//` can be used for multiline comment
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName="";
  constructor() { 
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);

  }

  ngOnInit() {
  }
  OnCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
}
