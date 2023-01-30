import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: './app-component.html', // or  template: "<h1>Hello</h1>",
  styleUrls: ['./app-component.css'], // or  styles: ["h1{color: red;}"],
})
export class AppComponent {
  add($event: Event) {
    console.log("Anything?");
  }
}
