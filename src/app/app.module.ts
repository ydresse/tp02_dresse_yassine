import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FooterComponent } from './footer/footer.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { RecapComponent } from './recap/recap.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, FooterComponent, TetiereComponent, SaisieClientComponent, RecapComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
