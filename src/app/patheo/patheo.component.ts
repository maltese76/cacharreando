import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-patheo',
  templateUrl: './patheo.component.html',
  styleUrls: ['./patheo.component.css']
})
export class PatheoComponent implements OnInit {

@Output() outputContador: EventEmitter<number> = new EventEmitter<number>();

nombre = 'paco';
contador = 0;
@Input() ciudad: string;

masUno() {
this.contador++;
this.outputContador.emit(this.contador);
}
  constructor() { }

  ngOnInit() {
  }

}
