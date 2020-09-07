import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  clockText: String;
  dateText: String;
  
  constructor(private titleService: Title, appComponent: AppComponent) {
    this.titleService.setTitle("Clock");
    appComponent.title = "Clock"; 
    setInterval(() => this.updateTime(), 1000);
  }
  updateTime() {
    let currentTime = new Date();
    let seconds = currentTime.getSeconds().toString();
    if (Number(seconds) < 10) {
      seconds = "0" + seconds;
    }
    let minutes = currentTime.getMinutes().toString();
    if (Number(minutes) < 10) {
      minutes = "0" + minutes;
    }
    let hours = currentTime.getHours().toString();
    var clockString: String = " a.m.";
    if (Number(hours) > 12) {
      hours = String(Number(hours) - 12);
      clockString = " p.m."
    }
    if (Number(hours) < 10) {
      hours = "0" + hours;
    }
    clockString = hours + ' : ' + minutes + ' : ' + seconds + clockString;
    this.clockText = clockString;
    this.displayYear(currentTime);
  }
  displayYear(currentDate: Date){
    let year = currentDate.getFullYear().toString();
    var monthNum = Number(currentDate.getMonth());
    let date = currentDate.getDate().toString();
    let dayNum = Number(currentDate.getDay());
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayString = day[dayNum] + ' ' +  month[monthNum] + ' ' + date + ", " + year;
    this.dateText = dayString;
  }

  ngOnInit() {
  }

}
