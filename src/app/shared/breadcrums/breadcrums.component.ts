import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { Title, MetaDefinition, Meta } from '@angular/platform-browser';

@Component({
    selector: 'app-breadcrums',
    templateUrl: './breadcrums.component.html',
    styles: []
})
export class BreadcrumsComponent implements OnInit {

    data: any;
    title: string;

    constructor(
        private _router: Router,
        private _title: Title,
        private _meta: Meta
    ) {
        this.getDataRoute()
            .subscribe(data => {
                this.data = data;
                this.title = this.data.titulo;
                this._title.setTitle(this.title);

                // Metatags para cada componente
                const metaTag: MetaDefinition = {
                    name: 'description',
                    content: this.title
                };
                this._meta.updateTag(metaTag);
            });
    }

    ngOnInit() {}

    // Obtenemos la información que trae asociado el evento del route
    getDataRoute() {
        return this._router.events
            .pipe(
                filter(event => event instanceof ActivationEnd),
                filter( (event: ActivationEnd) => !event.snapshot.firstChild),
                map( (event: ActivationEnd) => event.snapshot.data)
            );
    }
}
