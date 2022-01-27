import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  buttonText: string = "Click Me";
  color: string = "green";

  alertUser() {
    alert("You should not click !!!");

  }

  constructor() { }

  ngOnInit(): void {
  }

}
