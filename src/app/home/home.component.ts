import { Component, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private titleService: Title, appComponent: AppComponent) {
    this.titleService.setTitle("Justin Nguyen");
    appComponent.title = "Justin Nguyen";
  }

  ngOnInit() {
  }

}
