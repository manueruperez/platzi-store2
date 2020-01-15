import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'assets/banner/b1.jpg',
    'assets/banner/b2.jpg',
    'assets/banner/b3.jpg',
    'assets/banner/b4.jpg',
  ];

  ngOnInit() {
  }

}
