import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss']
})
export class ReusableButtonComponent implements OnInit {

@Input() text?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
