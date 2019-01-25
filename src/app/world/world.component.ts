import { Component, OnInit } from '@angular/core';
import {timer} from 'rxjs';
import {take} from 'rxjs/operators'; 

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss']
})
export class WorldComponent implements OnInit {


  originalStyle: Object = { };
  style: Object = { "-webkit-filter": "brightness(115%)", "filter": "brightness(115%)"};
  initialImage: string = "/assets/snow_ground1.png";
  currentIndex = 0;
  waiting = false;
  grid1: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 1, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  grid2: Object = { currentImage: "/assets/snow_ground1_rocks.png", originalImage: this.initialImage, id: 2, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid3: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 3, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid4: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 4, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid5: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 5, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  grid6: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 6, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid7: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 7, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid8: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 8, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid9: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 9, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid10: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 10, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid11: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 11, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid12: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 12, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid13: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 13, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid14: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 14, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid15: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 15, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid16: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 16, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid17: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 17, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  grid18: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 18, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};    
  grid19: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 19, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  grid20: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 20, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  gridEdge: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 99, type: "edge", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  objectKeys = Object.keys;

  worldGrids: Object = {
    1: this.grid1, 
    2: this.grid2, 
    3: this.grid3,
    4: this.grid4,
    99: this.gridEdge};
/*     6: this.grid6,
    7: this.grid7,
    8: this.grid8,
    9: this.grid9,
    10: this.grid10,
    11: this.grid11,
    12: this.grid12,
    13: this.grid13,
    14: this.grid14,
    15: this.grid15,
    16: this.grid16,
    17: this.grid17,
    18: this.grid18,
    19: this.grid19,
    20: this.grid20}; */


    grids: Object = {
      1: this.grid1, 
      2: this.grid2, 
      3: this.grid3,
      4: this.grid4,
      5: this.grid5,
      6: this.grid6,
      7: this.grid7,
      8: this.grid8,
      9: this.grid9,
      10: this.grid10,
      11: this.grid11,
      12: this.grid12,
      13: this.grid13,
      14: this.grid14,
      15: this.grid15,
      16: this.grid16,
      17: this.grid17,
      18: this.grid18,
      19: this.grid19,
      20: this.grid20 }; 

  constructor() { }

  ngOnInit() {
  }

 
  myFunc: Function = this.updateGrid.bind(this);

  interval: number;
  mouseLeave(gridId: number){
    if(this.worldGrids[gridId].type == 'edge'){
      if(this.waiting == true){ this.waiting = false;}
      else{return;}
      clearInterval(this.interval);
    }
    else{
      this.worldGrids[gridId].currentStyle = this.originalStyle;
      //this.worldGrids[gridId].currentImage = this.worldGrids[gridId].originalImage;
    }
  }
  mouseOver(gridId: number){
    if(this.worldGrids[gridId].type == 'edge'){
      if(this.waiting == true){return;}
      this.waiting = true;
      this.interval = setInterval(this.myFunc,150);
    }
    else{
      //this.worldGrids[gridId].originalImage = this.worldGrids[gridId].currentImage;
      //this.worldGrids[gridId].currentImage = "/assets/snow_ground_glow.png";
      this.worldGrids[gridId].currentStyle = this.style;
    }

  }

  updateGrid(){
      this.currentIndex++;
      if (this.currentIndex == 17){
        this.worldGrids[1] = this.grids[1+this.currentIndex];
        this.worldGrids[2] = this.grids[2+this.currentIndex];
        this.worldGrids[3] = this.grids[3+this.currentIndex];
        this.worldGrids[4] = this.grids[1];                  
      }
      else if (this.currentIndex == 18){
        this.worldGrids[1] = this.grids[1+this.currentIndex];
        this.worldGrids[2] = this.grids[2+this.currentIndex];
        this.worldGrids[3] = this.grids[1];                  
        this.worldGrids[4] = this.grids[2];
      }
      else if (this.currentIndex == 19){
        this.worldGrids[1] = this.grids[1+this.currentIndex];
        this.worldGrids[2] = this.grids[1];
        this.worldGrids[3] = this.grids[2];
        this.worldGrids[4] = this.grids[3];
      }
      else if (this.currentIndex == 20){
        this.worldGrids[1] = this.grids[1];
        this.worldGrids[2] = this.grids[2];
        this.worldGrids[3] = this.grids[3];
        this.worldGrids[4] = this.grids[4];
        this.currentIndex = 0;
      }
      else{
        this.worldGrids[1] = this.grids[1+this.currentIndex];
        this.worldGrids[2] = this.grids[2+this.currentIndex];
        this.worldGrids[3] = this.grids[3+this.currentIndex];
        this.worldGrids[4] = this.grids[4+this.currentIndex];
      }
      this.worldGrids[1].id = 1;
      this.worldGrids[2].id = 2;
      this.worldGrids[3].id = 3;
      this.worldGrids[4].id = 4;
  }

}
