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
  nome: string = 'abc';
  pessoa: any = {
    nome: 'Manoel',
    idade: 36
  }

  nomeDoCurso: string = 'Angular';

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

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
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
