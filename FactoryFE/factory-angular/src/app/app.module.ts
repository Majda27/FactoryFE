import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import { FormateurComponent } from './formateur/formateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormationComponent } from './formation/formation.component';
import { MatiereComponent } from './matiere/matiere.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    FormateurComponent,
    StagiaireComponent,
    FormationComponent,
    MatiereComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
