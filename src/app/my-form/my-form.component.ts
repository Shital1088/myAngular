import { Component, OnInit,ViewChild  } from '@angular/core';
import {MatMenuTrigger} from '@angular/material/menu';
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  @ViewChild('clickHoverMenuTrigger', {static: false}) clickHoverMenuTrigger: MatMenuTrigger;
  constructor() { }

  ngOnInit() {
  }

  openOnMouseOver() {
    this.clickHoverMenuTrigger.openMenu();
  }

}
