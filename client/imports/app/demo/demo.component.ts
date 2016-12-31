import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DemoDataService } from './demo-data.service';
import { Light } from "../../../../both/models/light.model";
import template from './demo.component.html';
import style from "./demo.component.scss";

@Component({
  selector: 'demo',
  template,
  styles: [ style ]
})
export class DemoComponent implements OnInit {
  greeting: string;
  data: Observable<Light[]>;

  constructor(private demoDataService: DemoDataService) {
    this.greeting = 'Hello Light Component!';
  }

  ngOnInit() {
    this.data = this.demoDataService.getData().zone();

    console.log(this.data);


    this.data.subscribe(res => {
      console.log(res);
    })
  }
}
