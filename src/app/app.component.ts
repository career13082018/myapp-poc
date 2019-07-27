import { Component, OnInit  } from '@angular/core';

declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AMT';
  
  deviceInfo: any;
  
   constructor() { }
  
  ngOnInit() {
    this.deviceInfo = {
        model: device.model,
        platform: device.platform,
        uuid: device.uuid,
        version: device.version,
        manufacturer: device.manufacturer,
        serial: device.serial
    }
  }
  
}
