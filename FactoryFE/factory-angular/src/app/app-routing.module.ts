import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { OrdinateurListeComponent } from './ordinateur-liste/ordinateur-liste.component';
import { VideoprojecteurListeComponent } from './videoprojecteur-liste/videoprojecteur-liste.component';
import { SalleListeComponent } from './salle-liste/salle-liste.component';
import { GestionnaireListeComponent } from './gestionnaire-liste/gestionnaire-liste.component';
import { TechnicienListeComponent } from './technicien-liste/technicien-liste.component';
import { FormateurListeComponent } from './formateur-liste/formateur-liste.component';
import { StagiaireListeComponent } from './stagiaire-liste/stagiaire-liste.component';
import { MatiereListeComponent } from './matiere-liste/matiere-liste.component';
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
import { FormateurEditComponent } from './formateur-edit/formateur-edit.component';

const routes: Routes = [
  { path: 'ordinateurliste', component: OrdinateurListeComponent },
  { path: 'videoprojecteurliste', component: VideoprojecteurListeComponent }, 
  { path: 'salleliste', component: SalleListeComponent }, 
  { path: 'gestionnaireliste', component: GestionnaireListeComponent }, 
  { path: 'technicienliste', component: TechnicienListeComponent }, 
  { path: 'formateurliste', component: FormateurListeComponent }, 
  { path: 'stagiaireliste', component: StagiaireListeComponent }, 
  { path: 'matiereliste', component: MatiereListeComponent }, 
  { path: 'moduleliste', component: ModuleListeComponent }, 
  { path: 'formationliste', component: FormationListeComponent },
  { path: 'ordinateuradd', component: OrdinateurAddComponent },
  { path: 'videoprojecteuradd', component: VideoprojecteurAddComponent }, 
  { path: 'salleadd', component: SalleAddComponent }, 
  { path: 'gestionnaireadd', component: GestionnaireAddComponent }, 
  { path: 'technicienadd', component: TechnicienAddComponent }, 
  { path: 'formateuradd', component: FormateurAddComponent }, 
  { path: 'stagiaireadd', component: StagiaireAddComponent }, 
  { path: 'matiereadd', component: MatiereAddComponent }, 
  { path: 'moduleadd', component: ModuleAddComponent }, 
  { path: 'formationadd', component: FormationAddComponent },
  { path: 'formateuredit/:id', component: FormateurEditComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
