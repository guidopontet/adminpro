import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { rendererTypeName } from '@angular/compiler';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber } from 'rxjs/Subscriber';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
    suscripcion: Subscription;

    constructor() {
        // this.regresaObservable().pipe(
        //     retry(2)
        // );

        this.suscripcion = this.regresaObservable().subscribe(
            numero => console.log('Subs: ', numero),
            error => console.log('Error en el obs: ', error),
            () => console.log('El observador terminó')
        );
    }

    ngOnInit() {
        console.log('Entrooooooooo');
    }

    ngOnDestroy() {
        console.log('Se cierra la página');
        this.suscripcion.unsubscribe();
    }

    regresaObservable(): Observable<any> {
        return new Observable((observer: Subscriber<any>) => {
            let contador = 0;
            let intervalo = setInterval(() => {
                contador++;

                let salida = {
                    valor: contador
                };

                observer.next(salida);
                // if (contador === 2) {
                //     clearInterval(intervalo);
                //     observer.error();
                // }
                // if (contador === 3) {
                //     clearInterval(intervalo);
                //     observer.complete();
                // }
            }, 1000);
        }).pipe(
            map(resp => {
                return resp.valor;
            }),
            filter((valor, index) => {
                if (valor % 2 === 0) {
                    return false;
                } else {
                    return true;
                }
            })
        );
    }
}
