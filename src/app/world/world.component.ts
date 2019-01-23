import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {

  image: string = "/assets/snow_ground1.png"

  constructor() { }

  ngOnInit() {
  }

  //

  mouseLeave(){
    this.image = "/assets/snow_ground1.png"
  }
  mouseOver(){
    this.image = "/assets/snow.gif"
  }

}
