import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styles: []
})
export class AccountSettingsComponent implements OnInit {
    constructor(public _ajustes: SettingsService) {}

    ngOnInit() {
        this.inicializarCheck();
    }

    changeTheme(theme, link: any) {
        this.aplicarCheck(link);
        this._ajustes.aplicarTheme(theme);
    }

    // Agregamos el check al theme seleccionado
    aplicarCheck(link) {
        let selectores: any = document.getElementsByClassName('selector');

        for (let element of selectores) {
            element.classList.remove('working');
        }
        link.classList.add('working');
    }

    // Pone el check en el theme actual
    inicializarCheck() {
        let selectores: any = document.getElementsByClassName('selector');
        let temaActual = this._ajustes.ajustes.tema;
        for (let selector of selectores) {
            if ( selector.getAttribute('data-theme') === temaActual) {
                selector.classList.add('working');
                break;
            }
        }
    }
}
