import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input() rating:number =0;
  @Output() ratingChanged:EventEmitter<number> = new EventEmitter();

  send(newRating:number){
    this.ratingChanged.emit(newRating);
  }
  
}
