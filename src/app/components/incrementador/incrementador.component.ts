import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

    @ViewChild('inputProgress') inputProgress: ElementRef;

    @Input() leyenda: string = 'Leyenda';
    @Input() progreso: number = 50;

    @Output() cambioValor: EventEmitter<number> = new EventEmitter();

    constructor() {}
    ngOnInit() {}

    cambiarValor(valor) {
        if (this.progreso + valor >= 0 && this.progreso + valor <= 100) {
          this.progreso += valor;
          this.cambioValor.emit(this.progreso);
          this.inputProgress.nativeElement.focus();
        }
    }

    onChanges(newValue: number) {

        if ( newValue > 100) {
            this.progreso = 100;
        } else if ( newValue < 0) {
            this.progreso = 0;
        } else {
            this.progreso = newValue;
        }
        this.inputProgress.nativeElement.value = this.progreso;
        this.cambioValor.emit(this.progreso);
    }
}
