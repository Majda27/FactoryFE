import { Component, OnInit } from '@angular/core';
import { Formateur } from '../formateur';
import { FormateurService } from '../formateur.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-formateur-add',
  templateUrl: './formateur-add.component.html',
  styleUrls: ['./formateur-add.component.css']
})
export class FormateurAddComponent implements OnInit {


  newFormateur: Formateur;
  
  constructor(private formateurservice: FormateurService, private location: Location) {
    this.newFormateur= {id: 1, nom:'', prenom:'', adresse:'', tel:'', matiere:null };
   }


  ngOnInit() {
 
  }
 

  addValues(): void {
    this.formateurservice.addFormateur(this.newFormateur).subscribe();
    this.goBack();
    alert("Formateur bien ajouté");
  }

  goBack(): void {
    this.location.back();
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
