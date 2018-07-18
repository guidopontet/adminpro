import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';
import { UserService } from '../../services/service.index';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styles: []
})
export class SidebarComponent implements OnInit {

    constructor(
        public _sidebarService: SidebarService,
        public _userService: UserService
    ) {}

    ngOnInit() {
        // console.log(this._sidebarService.menu);
    }
}
