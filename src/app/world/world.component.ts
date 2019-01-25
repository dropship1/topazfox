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
  cell1: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 1, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  cell2: Object = { currentImage: "/assets/snow_ground1_rocks.png", originalImage: this.initialImage, id: 2, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell3: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 3, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell4: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 4, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell5: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 5, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  cell6: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 6, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell7: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 7, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell8: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 8, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell9: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 9, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell10: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 10, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell11: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 11, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell12: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 12, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell13: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 13, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell14: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 14, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell15: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 15, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell16: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 16, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell17: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 17, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cell18: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 18, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};    
  cell19: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 19, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  cell20: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 20, type: "world", currentStyle: this.originalStyle, originalStyle: this.originalStyle};  
  cellEdge: Object = { currentImage: this.initialImage, originalImage: this.initialImage, id: 99, type: "edge", currentStyle: this.originalStyle, originalStyle: this.originalStyle};
  objectKeys = Object.keys;

  worldCells: Object = {
    1: this.cell1, 
    2: this.cell2, 
    3: this.cell3,
    4: this.cell4,
    99: this.cellEdge};
/*     6: this.cell6,
    7: this.cell7,
    8: this.cell8,
    9: this.cell9,
    10: this.cell10,
    11: this.cell11,
    12: this.cell12,
    13: this.cell13,
    14: this.cell14,
    15: this.cell15,
    16: this.cell16,
    17: this.cell17,
    18: this.cell18,
    19: this.cell19,
    20: this.cell20}; */


    allCells: Object = {
      1: this.cell1, 
      2: this.cell2, 
      3: this.cell3,
      4: this.cell4,
      5: this.cell5,
      6: this.cell6,
      7: this.cell7,
      8: this.cell8,
      9: this.cell9,
      10: this.cell10,
      11: this.cell11,
      12: this.cell12,
      13: this.cell13,
      14: this.cell14,
      15: this.cell15,
      16: this.cell16,
      17: this.cell17,
      18: this.cell18,
      19: this.cell19,
      20: this.cell20 }; 

  constructor() { }

  ngOnInit() {
  }

 
  myFunc: Function = this.updateGrid.bind(this);

  interval: number;
  mouseLeave(cellId: number){
    if(this.worldCells[cellId].type == 'edge'){
      if(this.waiting == true){ this.waiting = false;}
      else{return;}
      clearInterval(this.interval);
    }
    else{
      this.worldCells[cellId].currentStyle = this.originalStyle;
    }
  }
  mouseOver(cellId: number){
    if(this.worldCells[cellId].type == 'edge'){
      if(this.waiting == true){return;}
      this.waiting = true;
      this.interval = setInterval(this.myFunc,150);
    }
    else{
      this.worldCells[cellId].currentStyle = this.style;
    }

  }

  updateGrid(){
      this.currentIndex++;
      if (this.currentIndex == 17){
        this.worldCells[1] = this.allCells[1+this.currentIndex];
        this.worldCells[2] = this.allCells[2+this.currentIndex];
        this.worldCells[3] = this.allCells[3+this.currentIndex];
        this.worldCells[4] = this.allCells[1];                  
      }
      else if (this.currentIndex == 18){
        this.worldCells[1] = this.allCells[1+this.currentIndex];
        this.worldCells[2] = this.allCells[2+this.currentIndex];
        this.worldCells[3] = this.allCells[1];                  
        this.worldCells[4] = this.allCells[2];
      }
      else if (this.currentIndex == 19){
        this.worldCells[1] = this.allCells[1+this.currentIndex];
        this.worldCells[2] = this.allCells[1];
        this.worldCells[3] = this.allCells[2];
        this.worldCells[4] = this.allCells[3];
      }
      else if (this.currentIndex == 20){
        this.worldCells[1] = this.allCells[1];
        this.worldCells[2] = this.allCells[2];
        this.worldCells[3] = this.allCells[3];
        this.worldCells[4] = this.allCells[4];
        this.currentIndex = 0;
      }
      else{
        this.worldCells[1] = this.allCells[1+this.currentIndex];
        this.worldCells[2] = this.allCells[2+this.currentIndex];
        this.worldCells[3] = this.allCells[3+this.currentIndex];
        this.worldCells[4] = this.allCells[4+this.currentIndex];
      }
      this.worldCells[1].id = 1;
      this.worldCells[2].id = 2;
      this.worldCells[3].id = 3;
      this.worldCells[4].id = 4;
  }

}
