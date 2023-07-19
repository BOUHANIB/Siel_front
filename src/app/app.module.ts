import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExposantComponent } from './Component/Exposant/exposant/exposant.component';
import { LivreComponent } from './Component/Livre/livre/livre.component';
import { HomeComponent } from './Component/home/home.component';
import { NewExposantComponent } from './Component/Exposant/new-exposant/new-exposant.component';
import { NewLivreComponent } from './Component/Livre/new-livre/new-livre.component';
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditExposantComponent } from './Component/Exposant/edit-exposant/edit-exposant.component';
import { EditLivreComponent } from './Component/Livre/edit-livre/edit-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    ExposantComponent,
    LivreComponent,
    HomeComponent,
    NewExposantComponent,
    NewLivreComponent,
    EditExposantComponent,
    EditLivreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
