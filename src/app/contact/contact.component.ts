import { Component, OnInit } from '@angular/core';
import { Title} from "@angular/platform-browser";
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: Title, appComponent: AppComponent) {
    this.titleService.setTitle("Contact Information");
    appComponent.title = "Contact Information";
  }

  ngOnInit() {
  }

}
