import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.css']
})
export class PromoComponent implements OnInit {
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;
  constructor(private router: Router){}
  ngOnInit(){
    
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date('03/19/' + (this.now.getFullYear()) +' 22:59');
      this.showDate();
    });
    
  }
  showDate(){
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }
  
  navigate() {
    this.router.navigateByUrl("https://www.instagram.com/p/CbSkyparXzV/?utm_medium=copy_link")
  }


}
