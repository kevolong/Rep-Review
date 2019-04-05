import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  path: string = ""; // Current path

  constructor(private router: Router, private location: Location) {}

  ngOnInit() {
    //Update path if changed
    this.router.events.subscribe(event => {
      if (this.path !== this.location.path()) {
        this.path = this.location.path();
      }
      //Scroll to top
      if (event instanceof NavigationEnd) {
        window.scroll({
          top: -1,
          left: 0,
          behavior: "smooth"
        });
      }
    });
  }
}
