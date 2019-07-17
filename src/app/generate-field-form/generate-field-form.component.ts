import { Component, OnInit } from '@angular/core';
import {FieldService} from '../shared/field.service';

@Component({
  selector: 'app-generate-field-form',
  templateUrl: './generate-field-form.component.html',
  styleUrls: ['./generate-field-form.component.css']
})
export class GenerateFieldFormComponent implements OnInit {
  height = '';
  width = '';
  bombs = '';
  constructor(private fieldService: FieldService) { }

  ngOnInit() {
  }
  generate() {
    console.log(this.width, this.height, this.bombs);
    this.fieldService.generate(parseInt(this.width, 10), parseInt(this.height, 10), parseInt(this.bombs, 10));
  }

}
