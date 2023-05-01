import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { MenuComponent } from './templates/menu/menu.component';
import { FormPeopleComponent } from './people/form-people/form-people.component';
import { TablePeopleComponent } from './people/table-people/table-people.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    FormPeopleComponent,
    TablePeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
