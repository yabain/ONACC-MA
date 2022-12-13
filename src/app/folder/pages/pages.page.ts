import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor() { }

  options = {
    slidesPerView: 1.5,
    centered: true,
    spaceBetweenView:10
  }

  sliderOptions ={
  initialSlide: 0,
  slidesPerView: 1,
  speed:400
  }
  
  ngOnInit() {
  }

}
