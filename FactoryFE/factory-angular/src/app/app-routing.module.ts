import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormateurComponent } from './formateur/formateur.component';
import { MatiereComponent } from './matiere/matiere.component';

const routes: Routes = [
  { path: 'formateur', component: FormateurComponent },
  { path: 'matiere', component: MatiereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
