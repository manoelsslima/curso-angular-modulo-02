import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://manoel.eti.br';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';

  constructor() { }

  getValor() {
    return 1;
  }

  curtirCurso() {
    return true;
  }

  ngOnInit(): void {
  }

}
