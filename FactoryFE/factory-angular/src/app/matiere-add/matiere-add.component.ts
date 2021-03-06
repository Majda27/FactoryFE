import { Component, OnInit } from '@angular/core';
import { Matiere } from '../matiere';
import { MatiereService } from '../matiere.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-matiere-add',
  templateUrl: './matiere-add.component.html',
  styleUrls: ['./matiere-add.component.css']
})
export class MatiereAddComponent implements OnInit {

  newMatiere: Matiere;
  
  constructor(private matiereservice: MatiereService, private location: Location) {
    this.newMatiere={id: 1, titre:'', duree: 1, niveau:1, prerequis:'', contenu:'', objectifs:''}
   }

  ngOnInit() {
    
    
  }

  // addValues(): void {
    
  //   this.matiereservice.addMatiere(this.newMatiere).subscribe(matiere => {
  //     this.matieres.push(matiere);
  //   });
  //   alert("La matiere a bien été ajoutée");   
  // }

  addValues(): void {
    this.matiereservice.addMatiere(this.newMatiere).subscribe();
    this.goBack();
    alert("Matière bien ajoutée !");
  }

  goBack(): void {
    this.location.back();
  }

/*   addDuree(duree: number): void {
    duree = duree;
    if (!duree) { return; }
    this.matiereservice.addMatiere({ duree } as Matiere)
      .subscribe(matiere => {
        this.matieres.push(matiere);
      });
  } */
}
