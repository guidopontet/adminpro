import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// MODULOS
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
