import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public name = "Jameson";
  public myId = "testId";
  public isDisabled = true;
  public siteURL = window.location.href;
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public highlightColor = "orange";
  public greeting = "";

  public messageClasses = {
    "text-success": !this.hasError;
    "text-danger": this.hasError;
    "text-special": this.isSpecial;
  }

  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hi! Welcome to the app " + this.name;
  }

  onClick(event) {
    console.log("Welcome to this Angular 5 app.");
    this.greeting=event.type;
  }

}
