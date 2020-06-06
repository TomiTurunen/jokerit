import { Component, OnInit } from "@angular/core";
//import { Navbar } from './navbar/navbar'
import { RecordsService } from "./records.service";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.sass"],
  templateUrl: "./navbar/navbar.html"
})
export class AppComponent implements OnInit {
  public qwerty: string = "242";
  containerActive = false;
  //TODO get activates work
  ngOnInit(): void {
    console.log("123", window.location.href);
  }
  clicked(event) {
    this.containerActive = !this.containerActive;
    console.log("clicked");
  }
  public condition = false; // true if you want the class at first

  handleClick(event) {
    console.log(event.target);
    event.target.condition = true;
  }
}
