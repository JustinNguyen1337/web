import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, appComponent: AppComponent) {
    this.titleService.setTitle("About Me");
    appComponent.title = "Justin Nguyen"; 
  }

  ngOnInit() {
  }

}
