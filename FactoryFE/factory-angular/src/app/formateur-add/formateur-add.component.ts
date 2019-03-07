import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {


  selectedFormateur: Formateur;
  formateurs;
  newFormateur: Formateur;
  
  constructor(private formateurservice: FormateurService) {
    this.newFormateur={id: 1, nom:'', prenom:'', adresse:'', tel:'', matiere:null}
   }


  ngOnInit() {
    this.formateurservice.getFormateurs().subscribe(
      formateurs => this.formateurs = formateurs
    );
  }
 
  ifClickOnFormateur(formateur: Formateur) {
     this.selectedFormateur = formateur;
   } 

  addValues(): void {
    
    this.formateurservice.addFormateur(this.newFormateur).subscribe(formateur => {
      this.formateurs.push(formateur);
      
    });
    alert("Le formateur a bien été ajouté");
  }

/*   addDuree(duree: number): void {
    duree = duree;
    if (!duree) { return; }
    this.formateurservice.addFormateur({ duree } as Formateur)
      .subscribe(formateur => {
        this.formateurs.push(formateur);
      });
  } */
}
