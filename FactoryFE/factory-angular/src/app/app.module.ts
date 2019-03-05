import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterielComponent } from './materiel/materiel.component';
import { FormateurComponent } from './formateur/formateur.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { FormationComponent } from './formation/formation.component';
import { MatiereComponent } from './matiere/matiere.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { 
  BrowserAnimationsModule 
} from '@angular/platform-browser/animations';
import { 
  MatExpansionModule 
} from '@angular/material';
import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterielComponent,
    FormateurComponent,
    StagiaireComponent,
    FormationComponent,
    MatiereComponent,
    SidebarComponent,
    MainpageComponent,
  ],
  imports: [
    MatExpansionModule,
    BrowserAnimationsModule,
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
