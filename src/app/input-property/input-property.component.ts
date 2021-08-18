import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso', // app-input-property
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  @Input() nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
