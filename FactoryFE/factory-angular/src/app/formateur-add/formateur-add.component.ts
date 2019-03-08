import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';

@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {


  newFormateur: Formateur;
  
  constructor(private formateurservice: FormateurService) {
    this.newFormateur= {id: 1, nom:'', prenom:'', adresse:'', tel:'', matiere:null };
   }


  ngOnInit() {
 
  }
 

  addValues(): void {
    this.formateurservice.addFormateur(this.newFormateur).subscribe();
    alert("Formateur bien ajouté");
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
