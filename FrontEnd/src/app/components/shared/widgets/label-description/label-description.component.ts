import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-description',
  templateUrl: './label-description.component.html',
  styleUrls: ['./label-description.component.css']
})
export class LabelDescriptionComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
