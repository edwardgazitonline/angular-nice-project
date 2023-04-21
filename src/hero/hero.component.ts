import {Component , Input , Output , EventEmitter} from '@angular/core';

export class AppHero implements Output, Input {

  @Input() name:string;
  @Output() liked = new EventEmitter();
}
