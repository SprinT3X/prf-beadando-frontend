import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  guitar: any

  constructor() {
    this.guitar = localStorage.getItem('guitar')
    this.guitar = JSON.parse(this.guitar)
  }
}
