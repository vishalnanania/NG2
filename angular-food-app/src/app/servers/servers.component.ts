import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', //element
  //selector: '[app-servers]',//attribute
  //selector: '.app-servers',//class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  serverCreateStatus = "No Server Created";
  serverName = "";

  constructor() {
    setTimeout(()=> {
        this.allowAddServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  createServer() {
      this.serverCreateStatus = "Server was created, Server name is:" + this.serverName;
  }

  onUpdateServerName(event: Event) {
       //console.log(event);
       this.serverName = (<HTMLInputElement>event.target).value;
  }

}
