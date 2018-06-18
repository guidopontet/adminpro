import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    ajustes: Ajustes = {
        temaUrl: 'assets/css/colors/default-dark.css',
        tema: 'default-dark'
    };

    constructor() {
        this.cargarAjustes();
    }

    // Guardar ajustes en el local storage
    guardarAjustes() {
        localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
    }

    // Cargar ajustes del localStorage
    cargarAjustes() {
        if (localStorage.getItem('ajustes')) {
            this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
        }
        this.aplicarTheme(this.ajustes.tema);
    }

    // Aplicar el tema
    aplicarTheme(theme) {
        let urlTheme = `assets/css/colors/${theme}.css`;
        // Cambiamos el theme modificando el style del index.html
        document.getElementById('theme').setAttribute('href', urlTheme);

        this.ajustes.temaUrl = urlTheme;
        this.ajustes.tema = theme;
        this.guardarAjustes();
    }
}

interface Ajustes {
    temaUrl: string;
    tema: string;
}
