import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'event-binding-with-button-one';
  show: boolean = true;
  
  constructor() { }

  ngOnInit(): void {

    
  }
  
  onShow(): void {
    alert('Show button clicked!');
  }
  
  showHide(): boolean{
    return this.show = true;
  }
}




