import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  // Explict
  private nameAppString: string;

  constructor() { }

  ngOnInit() {

    this.nameAppString = "UngBaker";

  } // ngOnInit

} // Navigator Class
