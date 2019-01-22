import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  appTitle: string = 'TopazFox';

  image: string = "/assets/topazfox_world.png"

  constructor() { }

  ngOnInit() {
  }

  //

  mouseLeave(){
    this.image = "/assets/topazfox_world.png"
  }
  mouseOver(){
    this.image = "/assets/topazfox_world2.png"
  }
  
 

}
