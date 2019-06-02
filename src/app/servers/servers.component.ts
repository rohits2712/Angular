import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',//changing selector as an attribute , now app-server can be an attribute in div
  templateUrl: './servers.component.html',//` can be used for multiline comment
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
