import {Injectable} from '@angular/core';
import Generatop from '../Generator.js';
@Injectable({'providedIn': 'root'})

export class FieldService {
  public field = Generatop(6, 6, 5);
  public map = [];

  onClick(i: number, j: number) {

    this.field[i][j].visibility = true;
  }

  showAll() {
    this.field = this.field.map(row => row.map(col => col = {'contain': col.contain, 'visibility': true}));
    console.log(this.field);
  }
  reset(){
    this.field = Generatop(5, 5, 5);
  }
  generate( width: number, height: number, bombs: number) {
    console.log(width, height, bombs);
    this.field = Generatop(width, height, bombs);
  }
}

