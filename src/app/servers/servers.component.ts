import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',//changing selector as an attribute , now app-server can be an attribute in div
  templateUrl: './servers.component.html',//` can be used for multiline comment
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = "Testserver";
  serverCreated = false;
  serverNames = ['Test server', 'Test server 2'];
  servers = [{
    name: 'Testserver', online: 'True'
  },
  {
    name: 'Testserver 2', online: 'True'
  },
  {
    name: 'Testserver 2', online: 'True'
  },
  {
    name: 'Test server 3', online: 'True'
  },
  {
    name: 'Test server 4', online: 'True'
  }];

  public hasError = false;
  public isSpecial = true;
  public successClass = "text-success";
  public highlighightColor = "orange";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }
  greeting = "";
  name = "";
  

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);

  }

  ngOnInit() {
  }

  OnCreateServer() {
    this.serverCreated = false;
    this.serverNames.push(this.serverName);
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  onClick(event) {
    console.log(event);
    this.greeting = event.type;

  }
  logMessage(value) {
    console.log(value);
  }
}
