import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  doApplyH1Style: boolean = false;
  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data=> { 
      this.users = data;
      console.log(this.users);
    } )
  }

  buttonClicked() {
    //Toggle back and forth from true to false on click
    this.doApplyH1Style = !this.doApplyH1Style;
  }

}
