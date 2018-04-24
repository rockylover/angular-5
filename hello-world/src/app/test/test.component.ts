import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "James";
  public siteURL = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi! Welcome to the app " + this.name;
  }

}
