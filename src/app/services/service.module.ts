import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsService, SharedService, SidebarService, UserService } from './service.index';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuardGuard } from './guards/login-guard.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
      SettingsService,
      SharedService,
      SidebarService,
      UserService,
      LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
