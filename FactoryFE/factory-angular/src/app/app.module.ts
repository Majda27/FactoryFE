import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import { FormateurComponent } from './formateur/formateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormationComponent } from './formation/formation.component';
import { MatiereComponent } from './matiere/matiere.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    FormateurComponent,
    StagiaireComponent,
    FormationComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
