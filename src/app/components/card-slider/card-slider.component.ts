import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  itemsPerSlide = 4;

  singleSlideOffset = true;
  noWrap = true;

  slides = [
    { image: 'assets/image/a.jpg', name: 'Steve Rogers' },
    { image: 'assets/image/b.jpg', name: 'John Wick' },
    { image: 'assets/image/g.jpg', name: 'Alex Prat' },
    { image: 'assets/image/j.jpg', name: 'Tony Stark' },
    { image: 'assets/image/k.jpg', name: 'Phil Carter' },
    { image: 'assets/image/l.jpg', name: 'Clerk Jade' },
    { image: 'assets/image/m.jpg', name: 'James Brennan' },
    { image: 'assets/image/a1.jpg', name: 'Cindy Corn' },
    { image: 'assets/image/a2.jpg', name: 'Susan Johnson' }
  ];


}
