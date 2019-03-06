import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FormateurListeComponent } from './formateur-liste/formateur-liste.component';
import { MatiereListeComponent } from './matiere-liste/matiere-liste.component';
import { OrdinateurListeComponent } from './ordinateur-liste/ordinateur-liste.component';
import { VideoprojecteurListeComponent } from './videoprojecteur-liste/videoprojecteur-liste.component';
import { SalleListeComponent } from './salle-liste/salle-liste.component';
import { GestionnaireListeComponent } from './gestionnaire-liste/gestionnaire-liste.component';
import { TechnicienListeComponent } from './technicien-liste/technicien-liste.component';
import { StagiaireListeComponent } from './stagiaire-liste/stagiaire-liste.component';
import { ModuleListeComponent } from './module-liste/module-liste.component';
import { FormationListeComponent } from './formation-liste/formation-liste.component';
import { OrdinateurAddComponent } from './ordinateur-add/ordinateur-add.component';
import { VideoprojecteurAddComponent } from './videoprojecteur-add/videoprojecteur-add.component';
import { SalleAddComponent } from './salle-add/salle-add.component';
import { GestionnaireAddComponent } from './gestionnaire-add/gestionnaire-add.component';
import { TechnicienAddComponent } from './technicien-add/technicien-add.component';
import { FormateurAddComponent } from './formateur-add/formateur-add.component';
import { StagiaireAddComponent } from './stagiaire-add/stagiaire-add.component';
import { MatiereAddComponent } from './matiere-add/matiere-add.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { FormationAddComponent } from './formation-add/formation-add.component';

@NgModule({
  declarations: [
    AppComponent,
   
    SidebarComponent,
    MainpageComponent,
   
    FormateurListeComponent,
    MatiereListeComponent,
    OrdinateurListeComponent,
    VideoprojecteurListeComponent,
    SalleListeComponent,
    GestionnaireListeComponent,
    TechnicienListeComponent,
    StagiaireListeComponent,
    ModuleListeComponent,
    FormationListeComponent,
    OrdinateurAddComponent,
    VideoprojecteurAddComponent,
    SalleAddComponent,
    GestionnaireAddComponent,
    TechnicienAddComponent,
    FormateurAddComponent,
    StagiaireAddComponent,
    MatiereAddComponent,
    ModuleAddComponent,
    FormationAddComponent,
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
