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
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  passandoMouse() {
    this.isMouseOver = !this.isMouseOver;
  }

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
