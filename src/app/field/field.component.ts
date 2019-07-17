import {Component, OnInit} from '@angular/core';
import {FieldService} from '../shared/field.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  animations: [trigger('showContain', [
    state('unvisible', style({opacity: 0})),
    state('visible', style({opacity: 1})),
    transition('unvisible <=> visible', animate('0.5s'))]), [trigger('showRow', [
    state('unvisible', style({opacity: 0})),
    state('visible', style({opacity: 1})),
    transition('unvisible <=> visible', animate('0.5s'))])]]
})
export class FieldComponent implements OnInit {
  constructor(private fieldService: FieldService) { }
  animationState: string = 'unvisible';
  cellOpen: boolean = false;
  showRowState: string = 'unvisible';
  ngOnInit() {
    console.log(this.fieldService.field);
    this.showRowState = 'visible'
  }

  cellClick(cell, i, j) {
    if (cell === 'b') {
      alert('GAME OVER');
      this.fieldService.showAll();
    }
    if (cell !== 'b') {
      this.fieldService.onClick(i, j);
    }
    this.cellOpen = true;
    this.animationState = this.cellOpen ? 'visible' : 'unvisible';
  }

  reset() {
    this.fieldService.reset();
  }

}
