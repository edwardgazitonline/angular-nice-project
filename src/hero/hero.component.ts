import {Component , Input , Output , EventEmitter} from '@angular/core';

export class AppHero  {

  @Input() name:string;
  @Output() liked = new EventEmitter();
}
