import { Component, OnInit } from '@angular/core';

import { HttpServiceServiceService } from './http-service-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'httpProj';
 age:any;
  constructor(private serviceData: HttpServiceServiceService) {}
  ngOnInit() {
   
  }
 
  getMyName() {
    this.serviceData.getName().subscribe((myName: any) => {
      console.log(myName.name);
      this.age=myName.name;
    });
  }
}

